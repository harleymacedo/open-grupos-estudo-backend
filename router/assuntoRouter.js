//Obter o Router do Express
const assuntoRouter = require('express').Router();

//Obter todos os assuntos
assuntoRouter.get('/assunto', (req, res) => {
    res.json({'assuntos': []});
});

//Obter um assunto pelo ID
assuntoRouter.get('/assunto/:id', (req, res) => {
    res.json({});
});

//Inserir um novo assunto
assuntoRouter.post('/assunto', (req, res) => {
    res.json({});
});

//Atualizar um assunto
assuntoRouter.put('/assunto', (req, res) => {
    res.json({});
});

//Excluir um assunto
assuntoRouter.delete('/assunto', (req, res) => {
    res.json({});
});

module.exports = assuntoRouter;