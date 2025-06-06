FROM node:lts-alpine

USER node
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./ ./

RUN yarn build

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]