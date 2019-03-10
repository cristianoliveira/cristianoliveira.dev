FROM node:8

WORKDIR /usr/src/app


RUN npm install yarn -g

COPY . .

RUN yarn install
RUN yarn test --runInBand --no-cache

EXPOSE 8080
CMD [ "gatsby", "develop" ]
