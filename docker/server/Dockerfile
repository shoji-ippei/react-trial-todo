FROM node:14.15.1-alpine

WORKDIR /app
COPY ./package.json \
      ./yarn.lock \
      ./tsconfig.server.json \
      /app/
RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]