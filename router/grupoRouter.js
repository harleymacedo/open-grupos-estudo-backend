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

GrupoRouter.get('/grupo/:email', async (req, res) => {
    try {
        const result = await Grupo.findOne({
            email: req.body.email
        });
        res.json(result);
    } catch (error) {
        
    }
});

GrupoRouter.post('/grupo', async (req, res) => {
    try {
        console.log(req.body);
        await Grupo.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            meta: req.body.meta,
            imagem: req.body.imagem,
        });
        res.json({mensagem: 'Grupo cadastrado'});
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro'});
    }
    await res.json({});
});

GrupoRouter.put('/grupo', async (req, res) => {
    await res.json({});
});

GrupoRouter.delete('/grupo', async (req, res) => {
    await res.json({});
});

module.exports = GrupoRouter;