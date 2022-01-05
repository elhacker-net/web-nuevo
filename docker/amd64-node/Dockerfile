FROM amd64/node:current-alpine3.14 as builder
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app
RUN npm ci
EXPOSE 8080/tcp
ENTRYPOINT ["npm", "start", "--", "--host=0.0.0.0", "--allowed-hosts", ".elhacker.net"]
