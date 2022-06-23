//Importar mongoose
const mongoose = require('mongoose');

//Criar esquema
const AssuntoSchema = mongoose.Schema({
    nome: String,
    professor: String,
    periodo: Number,
    meta: String,
});

//Exportar modelo
module.exports = mongoose.model('Assunto', AssuntoSchema);