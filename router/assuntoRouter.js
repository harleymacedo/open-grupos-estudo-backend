const assuntoRouter = require('express').Router();

AssuntoRouter.get('/assunto', (req, res) => {
    res.json({'assuntos': []});
});

module.exports = assuntoRouter;