FROM node:10

COPY node/package*.json ./
RUN npm --prefix=node install

COPY node/ ./

CMD [ "npm", "run", "serve" ]
