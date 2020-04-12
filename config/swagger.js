import path from 'path';

var swaggerOptions = {
    swaggerDefinition: {
        info: {
            description: 'This is a Api Documentation',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir:  path.resolve(), //app absolute path
    files: ['../routes/**/*.js'] //Path to the API handle folder
};

export default swaggerOptions;
