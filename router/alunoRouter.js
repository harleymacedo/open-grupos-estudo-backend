const AlunoRouter = require('express').Router();
const Aluno = require('../model/Aluno');

AlunoRouter.get('/aluno', async (req, res) => {
    try {
        const result = await Aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca de aluno'});
    }
});

AlunoRouter.get('/aluno/:id', async (req, res) => {
    await res.json({});
});

AlunoRouter.post('/aluno', async (req, res) => {
    await res.json({});
});

AlunoRouter.put('/aluno', async (req, res) => {
    await res.json({});
});

AlunoRouter.delete('/aluno', async (req, res) => {
    await res.json({});
});

module.exports = AlunoRouter;