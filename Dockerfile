FROM node:15-alpine

WORKDIR /usr/src/app

ADD . .
RUN npm ci
RUN npm run build

CMD ["npm", "start"]