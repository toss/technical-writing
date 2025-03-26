FROM docker.toss.bz/node:22.11.0-alpine3.19 AS build

WORKDIR /app

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN
RUN apk add git

COPY . .

WORKDIR /app

RUN corepack enable
RUN yarn install
RUN yarn build

FROM docker.toss.bz/nginx:1.20.0-alpine

WORKDIR /app

COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app ./

CMD ["nginx", "-g", "daemon off;"]
