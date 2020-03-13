# COVID-19-screening-interface

> Covid-19 Screening Interface using Covid-19 OpenEHR Clinical Models

> Developed in the Open

## Summary

This repository contains software which enables an organisation to rapidly deploy a Covid-19 screening programme. Data collected will be stored in the local openEHR database and reports to the WHO standard made available.

Being Open Source, the application can be implemented within an organisation using existing systems therefore reducing privacy and information governance challenges associated with cloud systems.

Being modular, the application can be connected to an existing openEHR repository or operated with a stand-alone repository.

## Project aims

The aims of this project are:

1. Development of an Open Source Covid-19 screening application 
2. A clinically safe and sustainable application
2. Ensure that it is accessible to anyone anywhere to use and improve
3. Simple to deploy and operate
4. Built using open standard interfaces and components
5. Enables the user to collect screening data in an open, reusable and manageable way
6. Provides reports to the WHO mandated standard
7. Simplifying and ensuring maintenance of privacy


## References

openEHR CKM
: https://ckm.openehr.org/ckm/incubators/1013.30.80

## Design notes

- openEHR CDR: ehrbase
- Front-end: REACT
- Middleware: DJango

The screening delivers a web form which enables the user to input responses to the screening questions and store the result in an openEHR Clinical Data Repository (CDR).

Basic information on the subject is stored (the name or ID) and reporting of cases available.

## Contributor Licence Agreement (CLA)

We include a CLA to ensure that contributions don't restrict how this software can be used. If you are not comfortable with this, you may still fork / copy the code and set your own rules.
However to ensure that the health providers have perpetual and unencumbered use of this application, a CLA is necessary for our supported versions.

## Installing COVID-19-screening-interface

### ehrbase CDR

Using docker-compose: https://github.com/OpusVL/ehrbase-docker-compose

### Middleware

TBD

### Front-end


#### Prep / deps

Install and set up yarn - note that the last step may take a while

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
yarn
```

#### Clone this repo

```
git clone git@github.com:AppertaFoundation/COVID-19-screening-interface.git
cd COVID-19-screening-interface/frontend/
```

#### Start

```
yarn
yarn start
```

#### Troubleshooting

```00h00m00s 0/0: : ERROR: There are no scenarios; must have at least one.```

Cause: outdated yarn (provided by cmdtest)

See solution: https://github.com/yarnpkg/yarn/issues/2821

```
yarn run v1.22.4
$ react-scripts start
/bin/sh: 1: react-scripts: not found
```

Cause: starting before setting up

Solution: run '```yarn```' before '```yarn start```'


## Roadmap

- Real-time dashboard
  - screening count, positives

## Team

### openEHR clinical modelling

- Ian McNicoll (FreshEHR)
- Alan Fish (Apperta)

### System development

- JJ - Architecture (OpusVL)
- James Curtis - Developer (OpusVL)
- Adrianna - Front-end engineer (OpusVL)
- Darren Wilson - User Experience (UX Centric)
- Paul - Infrastructure engineer (OpusVL)

### Project management

- David Jobling (Apperta)
- Stuart Mackintosh (OpusVL)

## Contact

info@apperta.org

