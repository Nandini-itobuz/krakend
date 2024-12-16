FROM node:22-slim

WORKDIR /app

COPY package.json ./
COPY index.js ./

RUN npm install

# EXPOSE 9001

CMD [ "node", "index.js" ]