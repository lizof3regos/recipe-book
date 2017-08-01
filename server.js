'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const path = require('path');

// Create a server with a host and port
const server = new Hapi.Server();

server.register(require('vision'), (err) => {
    Hoek.assert(!err, err);

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: path.join(__dirname, '/src')
    });
});
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

server.route({
    method: 'GET',
    path:'/recipe',
    handler: require('./src/index')
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});