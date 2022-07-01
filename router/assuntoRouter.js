//Obter o Router do Express
const assuntoRouter = require('express').Router();

//Obter todos os assuntos
assuntoRouter.get('/assunto', async (req, res) => {
    await res.json([]);
});

//Obter um assunto pelo ID
assuntoRouter.get('/assunto/:id', async (req, res) => {
    await res.json({});
});

//Inserir um novo assunto
assuntoRouter.post('/assunto', async (req, res) => {
    await res.json({});
});

//Atualizar um assunto
assuntoRouter.put('/assunto', async (req, res) => {
    await res.json({});
});

//Excluir um assunto
assuntoRouter.delete('/assunto', async (req, res) => {
    await res.json({});
});

module.exports = assuntoRouter;