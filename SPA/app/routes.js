/**
 * Created by amurav on 07.04.2017.
 */
var configRoutes;

mongodb = require('mongodb');
mongoServer = new mongodb.Server(
    'localhost',
    mongodb.Connection.DEFAULT_PORT
);
dbHandler = new mongodb.Db('spa', mongoServer, { safe : true});

dbHandler.open(() => {
    console.log('Connection MongoDB successful');
});

configRoutes = (app, server) => {
    app.get('/', (request, response) => {
        response.redirect('/home.html');

    });

    app.all('/:obj_type/*?', (request, response, next) => {
        response.contentType('json');
        next();
    });

    app.get('/:obj_type/list', (request, response) => {
        response.send({title: request.params.obj_type + ' list'});
    });

    app.post('/:obj_type/create', (request, response) => {

        response.send({title: request.params.obj_type + ' created'});
    });

    app.get('/:obj_type/read/:id', (request, response) => {

        response.send({
            title: request.params.obj_type+ ' with id ' + request.params.id + ' found'
        });
    });

    app.post('/:obj_type/update/:id([0-9]+)', (request, response) => {

        response.send({
            title: request.params.obj_type+ ' with id ' + request.params.id + ' updated'
        });
    });

    app.get('/:obj_type/delete/:id([0-9]+)', (request, response) => {

        response.send({
            title: request.params.obj_type + ' with id ' + request.params.id + ' deleted'
        });

    });
}