FROM node:16-alpine3.14
WORKDIR /usr/src/app
RUN npm install -g @nestjs/cli

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
ENTRYPOINT ["npm", "run", "start:dev"]