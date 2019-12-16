FROM node:10 AS frontend

WORKDIR /usr/src/app

COPY frontend/package*.json frontend/
RUN npm --prefix=frontend install

COPY frontend/ frontend/
RUN npm --prefix=frontend run build
RUN mv frontend/dist dist

FROM node:10 AS final

COPY node/package*.json node/
RUN npm --prefix=node install

COPY node/ node/
COPY --from=frontend dist public

CMD [ "npm", "run", "serve" ]