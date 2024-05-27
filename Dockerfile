FROM node:lts-alpine3.20

ENV NODE_ENV development

WORKDIR /website

COPY . .

RUN npm install

CMD ["npm", "run", "start"]

EXPOSE 3000
