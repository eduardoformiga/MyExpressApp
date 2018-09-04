var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexao');
let Pessoa = require('./../models/pessoa');


/* GET home page. */
router.get('/', (req, res, next) => {
  Pessoa.find((err, pessoas) => {
    console.log(pessoas);
    if (err) throw err;
    res.render('index', { pessoas: pessoas });
  });
});

router.get('/pessoa/novo', (req, res, next) => {
  res.render('pessoaForm', {});
});

router.get('/pessoa/modificar/:id', (req, res, next) => {
  let idPessoa = req.params.id;  
  Pessoa.findOne({_id: idPessoa }, (err, pessoa) => {
    //console.log(pessoa);
    if (err) throw err;
    res.render('pessoaForm', { pessoa: pessoa });
  });
});

router.get('/pessoa/eliminar/:id', (req, res, next) => {
  let idPessoa = req.params.id;

  Pessoa.remove({_id: idPessoa }, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
