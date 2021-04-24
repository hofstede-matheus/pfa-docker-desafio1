FROM node:15.14.0-alpine3.10
COPY package.json package-lock.json /usr/src/app/
COPY src /usr/src/app/src/
WORKDIR /usr/src/app
RUN apk add bash && npm install
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "src/server.js"]