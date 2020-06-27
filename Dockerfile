FROM node:lts-stretch
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000/tcp
CMD [ "yarn","start" ]