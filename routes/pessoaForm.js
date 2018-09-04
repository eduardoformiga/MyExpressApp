let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexao');
let Pessoa = require('./../models/pessoa');

router.post('/pessoa/operar', (req, res, next) => {
  // console.log(req.body);  

  if (req.body._id === "") {
    let per = new Pessoa({
      nomes: req.body.nomes,
      sobrenomes: req.body.sobrenomes,
      idade: req.body.idade
    });
    
    per.save();
  } else {    
    //console.log(req.body._id);
    Pessoa.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;