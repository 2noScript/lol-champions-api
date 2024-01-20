FROM node:18.17.1
ENV NODE_ENV=production

WORKDIR /home/app

COPY  ["package.json","./"]

RUN yarn install --production

COPY  . .

EXPOSE 3000

CMD [ "yarn","start" ]