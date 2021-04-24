#!/bin/bash

docker network create pfa



docker run --network=pfa -d --name nodeapi he4dless/pfa-docker-desafio1-node

docker run --network=pfa --name nginx -p 8080:80 he4dless/pfa-docker-desafio1-nginx