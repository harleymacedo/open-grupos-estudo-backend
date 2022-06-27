//Importar mongoose
const mongoose = require('mongoose');

//Criar esquema
const GrupoSchema = mongoose.Schema({
    nome: String,
    descricao: String,
    meta: String,
    imagem: String,
});

//Exportar modelo
module.exports = mongoose.model("Grupo", GrupoSchema);