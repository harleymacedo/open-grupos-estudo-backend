const MaterialRouter = require('express').Router();

MaterialRouter.get('/material', (req, res) => {
    res.json([]);
});

MaterialRouter.get('/material/:id', (req, res) => {
    res.json({});
});

MaterialRouter.post('/material', (req, res) => {
    res.json({});
});

MaterialRouter.put('/material', (req, res) => {
    res.json({});
});

MaterialRouter.delete('/material', (req, res) => {
    res.json({});
});

module.exports = MaterialRouter;