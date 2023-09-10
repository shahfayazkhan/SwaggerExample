// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'API Documentation for Express Application with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    
  },
  apis: ['app.js'], // Specify the file that contains your API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
