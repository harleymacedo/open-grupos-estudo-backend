const GrupoRouter = require('express').Router();
const Grupo = require('../model/Grupo');

GrupoRouter.get('/grupo', async (req, res) => {
    try {
        const result = await Grupo.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca de dados'});
    }
});

GrupoRouter.get('/grupo/:id', async (req, res) => {
    await res.json({});
});

GrupoRouter.post('/grupo', async (req, res) => {
    await res.json({});
});

GrupoRouter.put('/grupo', async (req, res) => {
    await res.json({});
});

GrupoRouter.delete('/grupo', async (req, res) => {
    await res.json({});
});

module.exports = GrupoRouter;