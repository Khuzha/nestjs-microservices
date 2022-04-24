FROM node:18-alpine3.14

WORKDIR /app

COPY package*.json .
RUN npm i -g pnpm
RUN pnpm install

RUN apk add curl net-tools

COPY . .

CMD ["pnpm", "start:dev"]

EXPOSE 3000