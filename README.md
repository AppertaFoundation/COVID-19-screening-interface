# COVID-19-screening-interface

> Covid-19 Screening Interface using Covid-19 OpenEHR Clinical Models

> Developed in the Open

## Summary

This repostitory contains software which enables an organisatin to rapidly deploy a Covid-19 screening programme. Data collected will be stored in the local openEHR database and reports to the WHO standard made available.

Being Open Source, the application can be implemented within an organisation using extsting systems therefore reducing privacy and information governance challenges associated with cloud systems.

Being modlular, the application can be connected to an existing openEHR repository or operated with a standalone repository.

## Project aims

The aims of this project are:

1. Development of an Open Source Covid-19 screening application 
2. Ensure that it is accessible to anyone anywhere to use and improve
3. Simple to deploy and operate
4. Built using open standard interfaces and components
5. Enables the user to collect screening data in an open, reusable and managable way
6. Provides reports to the WHO mandated standard
7. Simplifying and ensuring maintenance of privacy


## References

openEHR CKM
: https://ckm.openehr.org/ckm/incubators/1013.30.80

## Design notes

- openEHR CDR: ehrbase
- Front-end: REACT
- Middleware: TBD

The screening delivers a web form which enables the user to input responses to the screening questions and store the result in an openEHR Clinical Data Repository (CDR).

Basic information on the subject is stored (the name or ID) and reporting of cases available.

## Installing

### ehrbase CDR

Using docker-compose: https://github.com/OpusVL/ehrbase

### Middleware

TBD

### Front-end

TBD


## Team

### openEHR clinical modeling

- Ian Mcnichol (FreshEHR)
- Alan Fish (Apperta)

### System development

- JJ - Architecture (OpusVL)
- James Curtis - Developer (OpusVL)
- Adrianna - Front-end engineer (OpusVL)
- Darren WIlson - User Experience (UX Centric)
- Paul - Infrastructure engineer (OpusVL)

### Project management

- David Jobling (Apperta)
- Stuart Mackintosh (OpusVL)

## Contact

info@apperta.org

