const AlunoRouter = require('express').Router();
const Aluno = require('../model/Aluno');

AlunoRouter.get('/aluno', async (req, res) => {
    try {
        const result = await Aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

AlunoRouter.get('/aluno/:id', async (req, res) => {
    try {
        const result = await Aluno.findOne({email: req.params.email});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

AlunoRouter.post('/aluno', async (req, res) => {
    try {
        await Aluno.create(req.body);
        res.json({mensagem: 'Aluno cadastrado'});
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro'});
    }
});

AlunoRouter.put('/aluno', async (req, res) => {
    try {
        await Aluno.updateOne({email: req.body.email}, req.body);
        res.json({mensagem: 'Aluno atualizado'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualiazação'});
    }
});

AlunoRouter.delete('/aluno', async (req, res) => {
    try {
        await Aluno.deleteOne({email: req.body.email});
        res.json({mensagem: 'Aluno excluído'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão'});
    }
});

module.exports = AlunoRouter;