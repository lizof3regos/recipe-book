const React = require('react');
const ReactDOMServer = require('react-dom/server');

function handle(request, reply) {
    let element = React.createElement('h1', null, 'Recipe');
    let body = ReactDOMServer.renderToString(element);
    return reply.view('./index.hbs', {body});
}

module.exports = handle;