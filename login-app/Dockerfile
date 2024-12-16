FROM node:22-slim

WORKDIR /app

COPY package.json ./
COPY server.js ./

RUN npm install

CMD [ "node", "server.js" ]