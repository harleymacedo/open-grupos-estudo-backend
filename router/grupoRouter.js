const GrupoRouter = require('express').Router();

GrupoRouter.get('/grupo', (req, res) => {
    res.json([]);
});

GrupoRouter.get('/grupo/:id', (req, res) => {
    res.json({});
});

GrupoRouter.post('/grupo', (req, res) => {
    res.json({});
});

GrupoRouter.put('/grupo', (req, res) => {
    res.json({});
});

GrupoRouter.delete('/grupo', (req, res) => {
    res.json({});
});

module.exports = GrupoRouter;