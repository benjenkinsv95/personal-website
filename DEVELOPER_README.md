# Developer READ ME
Here is a quick write up of how to start the app and deploy it.

## Local Development
### Prerequisite
To run it locally, you'll need to first install the angular CLI.

### Build
Build with `npm install`

### Run
Then startup the website with `ng serve --open`

## Deploy to Production
### Prerequisite
Install Docker on the production machine and the machine you plan to build from.

### Build and Push to Docker Hub
Build the Angular application, turn it into a docker image, tag it, and upload it to Docker Hub.
```
ng build --prod --output-path dist && \
  docker image build -t personal-website . && \
  docker tag personal-website benjenkinsv95/personal-website && \
  docker push benjenkinsv95/personal-website
```

### Run Docker Image (from Docker hub)
On the production machine

#### Prerequisites
This application requires [the following prerequisites](docker_nginx_prerequisites.md) so that it can be hosted with a domain name using a secure HTTPS encryption.

#### Run App in Production
Finally, run the application from DockerHub. Pulls down a fresh copy and specifies what the domain name should be.
```
docker pull benjenkinsv95/personal-website && \
docker run -d \
-e "VIRTUAL_HOST=ben-jenkins.com,www.ben-jenkins.com" \
-e "LETSENCRYPT_HOST=ben-jenkins.com,www.ben-jenkins.com" \
-e LETSENCRYPT_EMAIL=benjenkinsv95@gmail.com \
benjenkinsv95/personal-website
```
