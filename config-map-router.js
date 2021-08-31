const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Index!</h1>');
});

app.all('/teste', function (req, res) {
  res.send('<h1>Aceita todos os verbos http</h1>');
});

app.get(/api/, function (req, res) {
  res.send('<h1>Minha API</h1>');
});

const porta = 3000;
app.listen(porta, () => console.log(`Executando app na porta: ${porta}`));
