FROM node:18-alpine3.14

WORKDIR /app
COPY . .

RUN npm i -g pnpm
RUN pnpm install

CMD ["pnpm", "start:dev"]