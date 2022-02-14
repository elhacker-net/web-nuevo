FROM amd64/node:current-alpine3.15 as builder
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app
RUN npm ci
RUN npm run build
EXPOSE 8080/tcp
ENTRYPOINT ["node", "server/index.js"]
