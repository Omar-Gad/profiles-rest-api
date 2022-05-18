FROM node:18-alpine

RUN apk update && apk add bash

WORKDIR /code

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]
