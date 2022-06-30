const mongoose = require('mongoose');

const MaterialSchema = mongoose.Schema({
    nome: String,
    descricao: String,
    link: String,
    tipo: String,
    tamanho: Number 
});

module.exports = mongoose.model('Material', MaterialSchema);