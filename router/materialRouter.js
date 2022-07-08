const MaterialRouter = require('express').Router();
const Material = require('../model/Material');

MaterialRouter.get('/material', async (req, res) => {
    try {
        const result = await Material.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

MaterialRouter.get('/material/:id', async (req, res) => {
    try {
        const result = await Material.findOne({_id: req.params.id});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

MaterialRouter.post('/material', async (req, res) => {
    try {
        await Material.create(req.body);
        res.json({mensagem: 'Material cadastrado'});
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro'});
    }
});

MaterialRouter.put('/material', async (req, res) => {
    try {
        await Material.updateOne({_id: req.body.id}, req.body);
        res.json({mensagem: 'Material atualizado'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualização'});
    }
});

MaterialRouter.delete('/material', async (req, res) => {
    try {
        await Material.deleteOne({_id: req.body.id});
        res.json({mensagem: 'Material excluído'});
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão'});
    }
});

module.exports = MaterialRouter;