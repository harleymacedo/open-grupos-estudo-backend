//Imports principais
const express = require('express');
const app = express();
const assuntoRouter = require('./router/assuntoRouter');

//Rotas inseridas
app.use(assuntoRouter);

//Worker do projeto
app.listen(process.env.PORT || 3000, () => {
    console.log('App rodando!')
});