FROM node:alpine
COPY . /app
WORKDIR /app
CMD yarn index.js 