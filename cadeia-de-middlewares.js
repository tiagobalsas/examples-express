const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
  console.log('Inicio...');
  console.log('Fim...');
  next();
});

app.get('/', function (req, res) {
  console.log('Resposta...');
  res.send('<h1>Olá Express</h1>');
});

const porta = 3000;
app.listen(porta, () => console.log(`Executando ... ${porta}`));
