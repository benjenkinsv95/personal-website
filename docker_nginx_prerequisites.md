# Nginx and Letsencrypt Prerequisites
These should be running on the production server. 

They will allow you to map the application to domain names and provide a secure HTTPS connection using Nginx and letsencrypt.

## Start Nginx Proxy Server for domain name mapping
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

## Nginx Proxy Companion to generate SSL certificates
Replace `/root/certs` with the path to where your certs are located. 
```
docker run -d \
    -v /root/certs:/etc/nginx/certs:rw \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    --volumes-from nginx-proxy \
    jrcs/letsencrypt-nginx-proxy-companion
```
