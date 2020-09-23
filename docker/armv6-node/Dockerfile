FROM arm32v6/node:current-alpine3.10 as builder
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app
RUN apk add --no-cache git
RUN npm ci
EXPOSE 8080/tcp
ENTRYPOINT ["npm", "start", "--", "--host=0.0.0.0", "--allowed-hosts", ".minusfour.net"]
