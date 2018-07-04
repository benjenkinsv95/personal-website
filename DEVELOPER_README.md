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
These should be running. They will allow you to map the application to domain names and provide a secure HTTPS connection using Nginx and letsencrypt.

##### Start Nginx Proxy Server for domain name mapping
Replace `/root/certs` with the path to where your certs are located. 
```
docker run -d -p 80:80 -p 443:443 \
    --name nginx-proxy \
    -v /root/certs:/etc/nginx/certs:ro \
    -v /etc/nginx/vhost.d \
    -v /usr/share/nginx/html \
    -v /var/run/docker.sock:/tmp/docker.sock:ro \
    --label com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy \
    jwilder/nginx-proxy
```
This will map domain names to your docker applications. Using SSL certs for HTTPS.

#### Nginx Proxy Companion to generate SSL certificates
Replace `/root/certs` with the path to where your certs are located. 
```
docker run -d \
    -v /root/certs:/etc/nginx/certs:rw \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    --volumes-from nginx-proxy \
    jrcs/letsencrypt-nginx-proxy-companion
```

#### Run App in Production
Finally, run the application from DockerHub. Pulls down a fresh copy and specifies what the domain name should be.
```
docker pull benjenkinsv95/personal-website && \
docker run -d \
-e VIRTUAL_HOST=ben-jenkins.com \
-e LETSENCRYPT_HOST=ben-jenkins.com \
-e LETSENCRYPT_EMAIL=benjenkinsv95@gmail.com \
benjenkinsv95/personal-website
```
