const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>App em execução...</h1>');
});

app.use('/api', function (req, res, next) {
  console.log('Iniciando...');
  console.log('Finalizando...');
  next();
});

app.use('/api', function (req, res, next) {
  res.send('<h1>API</h1>');
});

porta = 3000;
app.listen(porta, () => console.log(`Executanto...`));
