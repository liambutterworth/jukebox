FROM node:10
USER node
RUN mkdir /home/node/app
COPY . /home/node/app
WORKDIR /home/node/app
RUN npm install --silent
