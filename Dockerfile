#base image
FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]