FROM node:14 AS deps

WORKDIR /app

RUN yarn global add typescript
RUN yarn global add ts-node
RUN apt-get update
RUN apt-get install -y openssl

COPY package.json yarn.lock ./

COPY ./src ./src
COPY ./schema/ ./schema/
COPY .env .env

RUN yarn install

COPY ./tsconfig.json ./tsconfig.json
EXPOSE 80
CMD ["yarn", "start:tracker"]

