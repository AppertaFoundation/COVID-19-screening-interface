# -*- coding: utf-8 -*-
import os
import requests


class OpenEHRConnector(object):
    _host = 'http://localhost'
    _username = os.environ['EHRBASE_USER']
    _password = os.environ['EHRBASE_PASSWORD']

    def get_token(self):
        response = requests.get(self._host, self._username, self._password)
        return response.get('token')

    def get(self, path):
        return requests.get(self._host + path)
