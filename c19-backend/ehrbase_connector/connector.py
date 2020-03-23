# -*- coding: utf-8 -*-
import os
import requests
import requests.exceptions

import attr


def connect(*, base_url) -> 'OpenEHRConnector':
    return OpenEHRConnector(base_url=base_url)


@attr.s(frozen=True)
class OpenEHRConnector(object):
    base_url = attr.ib()

    def _url(self, suffix):
        return self.base_url + suffix

    def get(self, path, params=None, **kwargs):
        # TODO also pass auth=(user, pass) once basic auth implemented
        return requests.get(self._url(path), params=params, **kwargs)

    def post(self, path, data=None, json=None, **kwargs):
        # TODO also pass auth=(user, pass) once basic auth implemented
        return requests.post(self._url(path), data=data, json=json, **kwargs)


@attr.s(frozen=True)
class OpenEHRAPI(object):
    connection = attr.ib()

    def ehr_id_for_nhs_number(self, *, nhs_number: str):
        def ehr_already_existed(status_code):
            return status_code == 409  # Conflict
        nhs_number_namespace = 'uk.nhs.number'
        creation_response = self.connection.post(
            '/ehrbase/rest/openehr/v1/ehr',
            json={
                "_type": "EHR_STATUS",
                "subject": {
                    "external_ref": {
                        "id": {
                            "_type": "GENERIC_ID",
                            "value": nhs_number,
                            "scheme": "uk.nhs.nhs_number"
                        },
                        "namespace": nhs_number_namespace,
                        "type": "PERSON"
                    }
                },
                "is_modifiable": "true",
                "is_queryable": "true",
            },
        )
        # TODO see if we can use the ETag header from POST rather than doing a separate GET
        if creation_response.status_code == requests.codes.ok \
           or ehr_already_existed(status_code=creation_response.status_code)\
        :
            # For now even if the POST was successful we have to GET because
            # EHRBase sends empty body with status 204 instead of 201 with some
            # JSON
            fetch_response = self.connection.get(
                '/ehrbase/rest/openehr/v1/ehr',
                params={
                    'subject_id': nhs_number,
                    'subject_namespace': nhs_number_namespace,
                },
            )
            if fetch_response.status_code == requests.codes.ok:
                return fetch_response.json()['ehr_id']['value']
            else:
                raise APIException(
                    "HTTP status {status} during GET /ehrbase/rest/openehr/v1/ehr"
                    .format(status=fetch_response.status_code)
                )
        else:
            raise APIException(
                "HTTP status {status} during POST /ehrbase/rest/openehr/v1/ehr"
            )


class APIException(Exception):
    pass
