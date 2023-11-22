const express = require('express');

const swaggerUi = require('swagger-ui-express');

const rotas = express();

const {
    cadastrarAluno,
    listarAlunos,
    obterAlunoPorID,
    atualizarAluno,
    excluirAluno

} = require('./controladores/usuarios')

const swaggerSpec = require('./swaggerConfig');

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cadastra um aluno.
 *     tags:
 *       - Alunos
 *     description: Endpoint para cadastrar um novo aluno.
 *     requestBody:
 *       content:
 *         application/json:
 *          string:
 *       responses:
 *       201:
 *         description: Aluno cadastrado com sucesso.
 *       400:
 *         description: Erro nos dados enviados.
 */
rotas.post('/usuarios', cadastrarAluno);

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os alunos.
 *     tags:
 *       - Alunos
 *     description: Endpoint para listar todos os alunos cadastrados.
 *     responses:
 *       200:
 *         description: Retorna a lista de alunos.
 */
rotas.get('/usuarios', listarAlunos);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obter um aluno pelo ID.
 *     tags:
 *       - Alunos
 *     description: Endpoint para detalhar um aluno pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retorna o aluno do ID informado.
 *       404:
 *         description: Aluno não encontrado.
 */
rotas.get('/usuarios/:id', obterAlunoPorID);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza os detalhes de um aluno por ID.
 *     tags:
 *       - Alunos
 *     description: Endpoint para atualizar os detalhes de um aluno por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *          string:
 *      
 *   responses:
 *       200:
 *         description: Aluno atualizado com sucesso.
 *       400:
 *         description: Erro nos dados enviados.
 *       404:
 *         description: Aluno não encontrado.
 */
rotas.put('/usuarios/:id', atualizarAluno);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Excluir aluno pelo ID.
 *     tags:
 *       - Alunos
 *     description: Endpoint para excluir um aluno pelo ID. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno excluído com sucesso.
 *       404:
 *         description: Aluno não encontrado.
 */
rotas.delete('/usuarios/:id', excluirAluno);

rotas.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = rotas;

