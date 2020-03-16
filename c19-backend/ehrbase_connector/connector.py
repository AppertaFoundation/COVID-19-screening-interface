# -*- coding: utf-8 -*-
import os
import requests

import attr


def connect(*, base_url) -> 'OpenEHRConnector':
    return OpenEHRConnector(base_url=base_url)


@attr.s(frozen=True)
class OpenEHRConnector(object):
    base_url = attr.ib()

    def get(self, path):
        return requests.get(self.base_url + path)
