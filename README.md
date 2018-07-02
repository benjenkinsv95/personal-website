# [Ben Jenkins Personal Website](http://www.ben-jenkins.com/) [![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]
This project contains the source code form my personal website.

## Local Development
### Prerequisite
Install angular CLI

### Run
Then startup the website with `ng serve --open`

## Deployment
### Prerequisite
Install Docker

### Build and Push to Docker Hub
```
ng build --prod --output-path dist && \
  docker image build -t personal-website . && \
  docker tag personal-website benjenkinsv95/personal-website:most-recent && \
  docker push benjenkinsv95/personal-website:most-recent
```


### Run Docker Image (from Docker hub)
`docker run -p 80:80 benjenkinsv95/personal-website:most-recent`

#### Ports
The left port your server makes accessible. While the right port is used inside the docker container.



### License

- Copyright 2017 Ben Jenkins (http://www.ben-jenkins.com/)
- Licensed under MIT

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-1.0.0-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
