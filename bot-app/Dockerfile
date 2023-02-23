FROM node:18

WORKDIR /bot-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start