//Imports principais
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const AssuntoRouter = require('./router/assuntoRouter');
const GrupoRouter = require('./router/grupoRouter');
const MaterialRouter = require('./router/materialRouter');
const AlunoRouter = require('./router/alunoRouter');

//Conexão com DB
mongoose.connect(process.env.DB_STR_CON);

//Rotas inseridas
app.use(AssuntoRouter);
app.use(GrupoRouter);
app.use(MaterialRouter);
app.use(AlunoRouter);

//Worker do projeto
app.listen(process.env.PORT || 3000, () => {
    console.log('App rodando!')
});