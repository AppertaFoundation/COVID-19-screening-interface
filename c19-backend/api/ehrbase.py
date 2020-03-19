from django.conf import settings

from ehrbase_connector import connector


CONNECTION = connector.connect(**settings.EHRBASE_CONNECTION_PARAMS)
