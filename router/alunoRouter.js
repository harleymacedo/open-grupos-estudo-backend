const AlunoRouter = require('express').Router();

AlunoRouter.get('/aluno', (req, res) => {
    res.json([]);
});

AlunoRouter.get('/aluno/:id', (req, res) => {
    res.json({});
});

AlunoRouter.post('/aluno', (req, res) => {
    res.json({});
});

AlunoRouter.put('/aluno', (req, res) => {
    res.json({});
});

AlunoRouter.delete('/aluno', (req, res) => {
    res.json({});
});

module.exports = AlunoRouter;