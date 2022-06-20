//Imports principais
const express = require('express');
const app = express();

//Rotas principais
app.get('/', (req, res) => {
    res.json({'mensagem': 'Lista de grupos'});
});

//Worker do projeto
app.listen(process.env.PORT || 3000, () => {
    console.log('App rodando!')
});