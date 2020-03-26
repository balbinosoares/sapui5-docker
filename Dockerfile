FROM node:12

WORKDIR /usr/app

RUN npm set @sap:registry=https://npm.sap.com

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm","start"]
