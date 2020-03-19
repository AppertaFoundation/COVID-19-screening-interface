# COVID-19-screening-interface

> Covid-19 Screening Interface using Covid-19 OpenEHR Clinical Models

> Developed in the Open

## Summary

This repository contains software which enables an organisation to rapidly deploy a Covid-19 screening programme. Data collected will be stored in the local openEHR database and reports to the WHO standard made available.

Being Open Source, the application can be implemented within an organisation using existing systems therefore reducing privacy and information governance challenges associated with cloud systems.

Being modular, the application can be connected to an existing openEHR repository or operated with a stand-alone repository.

Demo of front-end alpha product: https://adabedi.github.io/c19-demo/ - note, unstable

- [Screening question screenshot](https://github.com/AppertaFoundation/COVID-19-screening-interface/blob/master/frontend/screenshots/screening-questions.png)
- [Screening date screenshot](https://github.com/AppertaFoundation/COVID-19-screening-interface/blob/master/frontend/screenshots/screening-questions-date.png)

## Project aims

The aims of this project are:

1. Development of a clinicaly safe and sustainable Open Source Covid-19 screening application 
2. To ensure that it is accessible to anyone anywhere to use and improve
3. Simple to deploy and operate
4. Build using open standard interfaces and components
5. Enable the user to collect screening data in an open, reusable and manageable way
6. Provide reports to the WHO mandated standard
7. Simplify and ensure maintenance of privacy

## Project governance

Project governance is be managed via the Custodian model with Apperta performing the Custodian role. This ensures that the software is perpetually available without encumbrance whilst being safe, secure and professionally supported.

## References

openEHR CKM
: https://ckm.openehr.org/ckm/incubators/1013.30.80

## Design notes

- openEHR CDR: ehrbase
- Front-end: REACT
- Back-end: DJango

The screening delivers a web form which enables the user to input responses to the screening questions and store the result in an openEHR Clinical Data Repository (CDR).

Basic information on the subject is stored (the name or ID) and reporting of cases available.

## Contributor Licence Agreement (CLA)

Contributions are subject to a CLA to ensure that contributions do not restrict how this software can be used. If you are not comfortable with this, you may still fork / copy the code and set your own rules.
However to ensure that health professionals who rely on this software have perpetual and unencumbered use of this application, a CLA is necessary for our supported versions.

## Installing COVID-19-screening-interface

The software is provided as docker-compose containers whcih creates a low barrier to entry. However the associated docker files and images can be used within many container orchistration systems.

During the development phase, the instructions cover the individual components. The release version of the app will only require a single docker-compose which will perform all of the steps.

These instructions should get a CDR and the app up and running on a cloud hosted service or a local computing resource.

Use a recent Linux, for example

- Debian
- Ubuntu / Mint
- Centos / Fedora

or anything else that runs Docker.

### Installing Docker Community Edition

For typical Linux systems, an up to date Docker can be installed as follows:

1. ```curl -fsSL https://get.docker.com -o /tmp/get.docker.sh ```
2. ```sudo sh /tmp/get.docker.sh ```

Other installation information can be found here: https://docs.docker.com/install/

### Installing ehrbase CDR

ehrbase can be installed using the docker-compose file here: https://github.com/OpusVL/ehrbase-docker-compose

In summary:

1. Download the ehrbase compose file:
    - ```git clone https://github.com/OpusVL/ehrbase.git```
3. ```cd ehrbase```
4. ```docker-compose up -d```

### Screening application

#### Clone this repo

```
git clone git@github.com:AppertaFoundation/COVID-19-screening-interface.git
cd COVID-19-screening-interface/frontend/
```

#### App back-end

The docker-compose.yml brings in the back-end and runtime dependacies.

1. ```cd c19-backend```
2. ```docker build -t quay.io/opusvl/c19:dev .```

> The compose should be considered unstable, paths and config will change.

#### Front-end development environment

The front-end is built in React. The following instructions should help get the development environment up and running.

Once complete, this will not be required.

#### Prep / deps

Install and set up yarn - note that the last step may take a while

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
yarn
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


## Installing the covid archetypes into ehrbase

Once you have ehrbase up and running...

It's actually the template you upload, and that's a `.opt` file

```bash
curl \
    -v --location \
    --request POST \
    'http://localhost:8001/ehrbase/rest/openehr/v1/definition/template/adl1.4' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/xml' \
    --header 'PREFER: representation=minimal'
    --data-binary '@openehr/tech/opt/openEHR-Suspected Covid-19 assessment.v0.opt'
```

If you're unsure whether it has gone successfully (the POST handler doesn't return you anything),
try again and it should give you a 409 Conflict error if it uploaded successfully last time.
Unless, that is, you have the setting enabled (which we'll document here in due course) to allow
templates to be overwritten.


## Data protection and information governance

The application can operate within the existing IT estate of the customer therefore no data is stored outside the existing information governance scope through a standard installation.

Where information governance requires, approved hosting service should be used.


## Contributing

Please help us improve our documentation, installation process fix bugs, test and use. 

You can engage and contribute in the following ways:

1. Clone the repo's, make changes and create a Pull Request (PR)
2. Raise an issue on Github
3. Join us on Slack, contact info@apperta.org for details
4. Share details of this project with others
5. Add to the roadmap

## Team

Many people are involved in this project directly and indirectly and it builds on significant efforts of the industry and community. Some of the people in our direct team are:

### openEHR clinical modelling

- Ian McNicoll ([openEHR](https://www.openehr.org/),[FreshEHR](https://freshehr.com/))
- Alan Fish ([Apperta](https://apperta.org/))

### Clinical design

- Dr Alexander Davey

### System development

- James C - Developer ([OpusVL](https://opusvl.com)
- Adrianna - Front-end engineer ([OpusVL](https://opusvl.com)
- Darren Wilson - User Experience ([UX Centric](https://www.uxcentric.co.uk/))
- Paul B - Infrastructure engineer ([OpusVL](https://opusvl.com)
- Nick - Developer ([OpusVL](https://opusvl.com)
- Paul W - Developer ([OpusVL](https://opusvl.com)
- Matt S - Developer (RBC/community)

### Project management

- David Jobling - Project co-ordinator / analyst ([Apperta](https://apperta.org/))
- JJ - Architect / project director ([OpusVL](https://opusvl.com))
- Stuart Mackintosh ([OpusVL](https://opusvl.com)

## Contact

info@apperta.org

