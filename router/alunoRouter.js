const AlunoRouter = require('express').Router();

AlunoRouter.get('/aluno', async (req, res) => {
    await res.json([]);
});

AlunoRouter.get('/aluno/:id', async (req, res) => {
    await res.json({});
});

AlunoRouter.post('/aluno', async (req, res) => {
    await res.json({});
});

AlunoRouter.put('/aluno', async (req, res) => {
    await res.json({});
});

AlunoRouter.delete('/aluno', async (req, res) => {
    await res.json({});
});

module.exports = AlunoRouter;