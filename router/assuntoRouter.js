const assuntoRouter = require('express').Router();
const Assunto = require('../model/Assunto');

assuntoRouter.get('/assunto', async (req, res) => {
    try {
        const result = await Assunto.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

assuntoRouter.get('/assunto/:id', async (req, res) => {
    try {
        const result = await Assunto.find({_id: req.params.id});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

assuntoRouter.post('/assunto', async (req, res) => {
    try {
        await Assunto.create(req.body);
        res.json({mensagem: 'Assunto criado'});        
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro'});
    }
});

assuntoRouter.put('/assunto', async (req, res) => {
    try {
        await Assunto.updateOne({_id: req.body.id}, req.body);
        res.json({mensagem: 'Assunto atualizado'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualização'});
    }
});

assuntoRouter.delete('/assunto', async (req, res) => {
    try {
        await Assunto.deleteOne({_id: req.body.id});
        res.json({mensagem: 'Assunto atualizado'});
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão'});
    }    
});

module.exports = assuntoRouter;