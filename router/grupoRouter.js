const GrupoRouter = require('express').Router();

GrupoRouter.get('/grupo', async (req, res) => {
    await res.json({grupos: []});
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