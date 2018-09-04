let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pessoaSchema = new Schema({
    id: {type: String},
    nomes: {type: String},
    sobrenomes: {type: String},
    idade: {type: Number, min : 0}
}, {versionKey: false});

let Pessoa = mongoose.model('Pessoas', pessoaSchema);

module.exports = Pessoa;

