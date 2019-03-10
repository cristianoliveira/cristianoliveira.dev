FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install yarn -g

COPY . .

RUN yarn install
RUN yarn test

EXPOSE 8080
CMD [ "gatsby", "develop" ]
