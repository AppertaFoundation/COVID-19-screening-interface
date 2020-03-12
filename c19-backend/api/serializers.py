# -*- coding: utf-8 -*-
from rest_framework import serializers


class BodyTempSerializer(serializers.Serializer):
    magnitude = serializers.CharField()
    units = serializers.CharField()


class OtherSymptomSerializer(serializers.Serializer):
    symptomNameText = serializers.CharField()
    symptomNameCode = serializers.CharField()
    symptomNameTerminology = serializers.CharField()


class SymptomsSerializer(serializers.Serializer):
    firstSymptomsPresenceCode = serializers.CharField()
    firstSymptomsPresenceText = serializers.CharField()
    dateOfOnset = serializers.CharField()
    coughPresenceCode = serializers.CharField()
    coughPresenceText = serializers.CharField()
    feverPresenceCode = serializers.CharField()
    feverPresenceValue = serializers.CharField()
    difficultyBreathingPresenceCode = serializers.CharField()
    difficultyBreathingPresenceText = serializers.CharField()
    soreThroatPresenceCode = serializers.CharField()
    soreThroatPresenceText = serializers.CharField()
    otherSymptom = OtherSymptomSerializer()


class Covid19Serializer(serializers.Serializer):
    clinicalAuthorName = serializers.CharField()
    clinicalAuthorId = serializers.CharField()
    documentTime = serializers.CharField()
    symptoms = SymptomsSerializer()
    bodyTemp = BodyTempSerializer()
