FROM node:16.14.0-alpine

RUN apk update && apk add python make g++

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app


COPY package.json ./
COPY yarn.lock ./
USER node
RUN yarn add ts-node
RUN yarn install

COPY --chown=node:node . .
CMD ["yarn", "start:tracker"]

