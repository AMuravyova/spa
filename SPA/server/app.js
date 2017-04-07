/**
 * Created by amurav on 07.04.2017.
 */
var http  = require('http'),
express = require('express'),
routes = require('./routes'),
app = express(),
server = http.createServer(app);

app.get('/', (request, response) => {
    response.redirect('/home.html');

});

app.get('documents/list', (request, response) => {
    response.contentType('json');
    response.send({title: 'documents list'});
});

app.post('/documents/create', (request, response) => {
    response.contentType('json');
    response.send({title: 'document created'});
});

app.get('/documents/read/:id', (request, response) => {
    response.contentType('json');
    response.send({
        title: 'document with id ' + request.params.id + ' found'
    });
});

app.post('/documents/update/:id([0-9]+)', (request, response) => {
    response.contentType('json');
    response.send({
        title: 'document with id ' + request.params.id + ' updated'
    });
});

app.get('/documents/delete/:id([0-9]+)', (request, response) => {
    response.contentType('json');
    response.send({
        title: 'document with id ' + request.params.id + ' deleted'
    });

});