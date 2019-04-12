const Hapi = require('hapi');
const mongoose = require('mongoose');

/* TODO: Get values from .env */
const server = Hapi.server({
  port: 3000
});

const db = require('./db').db;

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return { title: 'Hello, world!!!!' };
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
