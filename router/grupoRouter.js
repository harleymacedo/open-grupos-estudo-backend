const GrupoRouter = require('express').Router();
const Grupo = require('../model/Grupo');

GrupoRouter.get('/grupo', async (req, res) => {
    try {
        const result = await Grupo.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca de grupos'});
    }
});

GrupoRouter.get('/grupo/:email', async (req, res) => {
    try {
        const result = await Grupo.findOne({
            nome: req.body.nome
        });
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca do grupo'})
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
        res.json({mensagem: 'Erro no cadastro do grupo'});
    }
});

GrupoRouter.put('/grupo', async (req, res) => {
    try {
        await Grupo.updateOne({nome: req.body.nome}, {
            nome: req.body.nome,
            descricao: req.body.descricao,
            meta: req.body.meta,
            imagem: req.body.imagem,
        });
        res.json({mensagem: 'Grupo atualizado'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualização do grupo'});
    }
});

GrupoRouter.delete('/grupo', async (req, res) => {
    try {
        await Grupo.deleteOne({nome: req.body.nome});
        res.json({mensagem: 'Grupo excluído'});
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão do grupo'});
    }
});

module.exports = GrupoRouter;