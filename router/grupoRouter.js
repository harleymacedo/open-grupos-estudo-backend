const GrupoRouter = require('express').Router();
const Grupo = require('../model/Grupo');

GrupoRouter.get('/grupo', async (req, res) => {
    try {
        const result = await Grupo.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

GrupoRouter.get('/grupo/:nome', async (req, res) => {
    try {
        const result = await Grupo.findOne({nome: req.params.nome});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'})
    }
});

GrupoRouter.post('/grupo', async (req, res) => {
    try {
        await Grupo.create(req.body);
        res.json({mensagem: 'Grupo cadastrado'});
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro'});
    }
});

GrupoRouter.put('/grupo', async (req, res) => {
    try {
        await Grupo.updateOne({nome: req.body.nome}, req.body);
        res.json({mensagem: 'Grupo atualizado'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualização'});
    }
});

GrupoRouter.delete('/grupo', async (req, res) => {
    try {
        await Grupo.deleteOne({_id: req.body._id});
        res.json({mensagem: 'Grupo excluído'});
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão'});
    }
});

module.exports = GrupoRouter;