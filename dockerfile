FROM node:18

RUN npm install pnpm -g

RUN mkdir -p /home/api

WORKDIR /home/api

EXPOSE 3000

CMD [ "pnpm", "run", "start:dev" ]
