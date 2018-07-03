# Local Development
## Prerequisite
Install angular CLI

## Run
Then startup the website with `ng serve --open`

# Deployment
## Prerequisite
Install Docker

## Build and Push to Docker Hub
```
ng build --prod --output-path dist && \
  docker image build -t personal-website . && \
  docker tag personal-website benjenkinsv95/personal-website && \
  docker push benjenkinsv95/personal-website
```


## Run Docker Image (from Docker hub)
```
docker pull benjenkinsv95/personal-website && \
docker run -d -e VIRTUAL_HOST=ben-jenkins.com benjenkinsv95/personal-website
```

### Ports
The left port your server makes accessible. While the right port is used inside the docker container.

## HTTPS
https://medium.com/@mvuksano/using-tls-certificates-with-nginx-docker-container-74c6769a26db
