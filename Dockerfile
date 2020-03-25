FROM node:12.16.1

WORKDIR /usr/app

RUN npm set @sap:registry=https://npm.sap.com

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4004

CMD ["npm","run","start-local"]