"""Converters between what we're accepting from the frontend and what ERHBase expects.

These are IO free for ease of testing.  Anything that depends on system state
must have its values passed in as parameters.
"""

import datetime
from typing import Mapping

from toolz import dicttoolz


def covid_archetype_structure(
        clinical_author_name: str,
        clinical_author_id: str,
        document_time: datetime.datetime,
        form_values: Mapping,
) -> dict:
    """
    :param clinical_author_name: Name of the clinician
    :param clinical_author_id: The clinician's id
    :param document_time: Full datetime that document was created
    :param form_values: {
            'date_of_onset': date,
            'first_symptoms_presence': 'present'|'absent'|'unknown',
            'cough_presence': 'present'|'absent'|'unknown',
            'fever_presence': 'present'|'absent'|'unknown',
            'difficulty_breathing_presence': 'present'|'absent'|'unknown',
            'sore_throat_presence': 'present'|'absent'|'unknown',
            'body_temperature_degrees_C': float,
        }
    :return: simple dict that can be later expanded to canonical composition format
    """
    return dict(
        clinicalAuthorName=clinical_author_name,
        clinicalAuthorId=clinical_author_id,
        documentTime=document_time.isoformat(),
        bodyTemp=dict(
            magnitude=form_values['body_temperature_degrees_C'],
            units='Cel',
        ),
        symptoms=dicttoolz.merge(
            {
                'dateOfOnset': form_values['date_of_onset'].strftime('%Y-%m-%d')
            },
            archetype_values_from_presence_field(
                prefix='firstSymptomsPresence',
                presence=form_values['first_symptoms_presence']),
            archetype_values_from_presence_field(
                prefix='coughPresence', presence=form_values['cough_presence']),
            archetype_values_from_presence_field(
                prefix='feverPresence', presence=form_values['fever_presence']),
            archetype_values_from_presence_field(
                prefix='difficultyBreathingPresence',
                presence=form_values['difficulty_breathing_presence']),
            archetype_values_from_presence_field(
                prefix='soreThroatPresence',
                presence=form_values['sore_throat_presence']),
        ),
    )


def archetype_values_from_presence_field(prefix: str, presence: str) -> dict:
    codes = dict(
        unknown='at0.4',
        present='at0.2',
        absent='at0.3',
    )
    return {
        prefix+'Code': codes[presence],
        prefix+'Text': presence.capitalize(),
    }
