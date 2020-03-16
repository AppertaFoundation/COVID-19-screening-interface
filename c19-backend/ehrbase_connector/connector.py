# -*- coding: utf-8 -*-
import os
import requests

import attr


def connect(*, base_url, username, password) -> 'OpenEHRConnector':
    token = 'FAKE'   # TODO get a real one
    #response = requests.get(base_url, username, password)
    #token = response.get('token')
    return OpenEHRConnector(base_url=base_url, username=username, token=token)


@attr.s(frozen=True)
class OpenEHRConnector(object):
    base_url = attr.ib()
    username = attr.ib()
    token = attr.ib()

    def get(self, path):
        return requests.get(self.base_url + path)
