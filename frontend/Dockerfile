FROM mhart/alpine-node:10

WORKDIR /backend
EXPOSE 3000

ADD . /backend
RUN npm install
RUN npm build

CMD ["npm", "start"]