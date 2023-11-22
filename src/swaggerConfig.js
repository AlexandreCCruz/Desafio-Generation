const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API para cadastrar alunos',
            version: '1.0.0',
            description: 'Essa API tem como objetivo a manipulação de dados dos alunos'
        },
    },
    components: {
        schemas: {
            Aluno: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                    },
                    idade: {
                        type: 'number',
                    },
                    nota_do_primeiro_semestre: {
                        type: 'string'
                    },
                    nota_do_segundo_semestre: {
                        type: 'string'
                    },
                    nome_do_professor: {
                        type: 'string'
                    },
                    numero_da_sala: {
                        type: 'numer'
                    },
                }
            }
        }
    },
    apis: ['./src/rotas.js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec 
