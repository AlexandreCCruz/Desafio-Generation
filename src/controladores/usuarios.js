const knex = require('../conexao');

const cadastrarAluno = async (req, res) => {
    const {
        nome,
        idade,
        nota_do_primeiro_semestre,
        nota_do_segundo_semestre,
        nome_do_professor,
        numero_da_sala
    } = req.body;

    try {
        const usuario = await knex('usuarios')
            .insert({
                nome,
                idade,
                nota_do_primeiro_semestre,
                nota_do_segundo_semestre,
                nome_do_professor,
                numero_da_sala
            })
            .returning('*');

        if (!usuario) {
            return res.status(400).json("O aluno não foi cadastrado.");
        }

        return res.status(201).json(usuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listarAlunos = async (req, res) => {
    const usuarios = await knex('usuarios')
    return res.status(200).json(usuarios);
}

const obterAlunoPorID = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioEncontrado = await knex('usuarios')
            .where({ id })
            .first();

        if (!usuarioEncontrado) {
            return res.status(400).json("Aluno não encontrado");
        }

        return res.status(200).json(usuarioEncontrado);
    } catch (error) {
        return res.status(404).json(error.message);
    }
}

const atualizarAluno = async (req, res) => {
    const { id } = req.params;

    const {
        nome,
        idade,
        nota_do_primeiro_semestre,
        nota_do_segundo_semestre,
        nome_do_professor,
        numero_da_sala
    } = req.body;

    try {
        const usuarioEncontrado = await knex('usuarios')
            .where({ id })
            .first();

        if (!usuarioEncontrado) {
            return res.status(404).json("Aluno não encontrado");
        }

        const atualizarUsuario = await knex('usuarios')
            .where({ id })
            .update({
                nome,
                idade,
                nota_do_primeiro_semestre,
                nota_do_segundo_semestre,
                nome_do_professor,
                numero_da_sala
            })

        if (!atualizarUsuario) {
            return res.status(400).json("O Aluno não foi atualizado");
        }

        return res.status(200).json('Aluno foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirAluno = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioEncontrado = await knex('usuarios')
            .where({ id })
            .first();

        if (!usuarioEncontrado) {
            return res.status(404).json("Aluno não encontrado");
        }

        const excluirUsuario = await knex('usuarios')
            .where({ id })
            .del()

        if (!excluirUsuario) {
            return res.status(400).json("Aluno não foi excluído");
        }

        return res.status(200).json('Aluno excluído com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarAluno,
    listarAlunos,
    obterAlunoPorID,
    atualizarAluno,
    excluirAluno
}