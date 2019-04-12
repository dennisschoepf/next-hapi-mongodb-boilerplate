FROM mhart/alpine-node:10

WORKDIR /backend
EXPOSE 3001

ADD . /backend
RUN npm install

CMD ["npm", "start"]