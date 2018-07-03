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
  docker tag personal-website benjenkinsv95/personal-website:most-recent && \
  docker push benjenkinsv95/personal-website:most-recent
```


## Run Docker Image (from Docker hub)
`docker run -p 80:80 benjenkinsv95/personal-website:most-recent`

### Ports
The left port your server makes accessible. While the right port is used inside the docker container.

## HTTPS
https://medium.com/@mvuksano/using-tls-certificates-with-nginx-docker-container-74c6769a26db