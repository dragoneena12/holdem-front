FROM node:15-alpine

WORKDIR /usr/src/app

ADD . .

CMD ["sh", "run.sh"]