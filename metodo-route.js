const express = require('express');
const app = express();

app
  .route('/clientes')
  .get((req, res) => res.send('lista de clientes'))
  .post((req, res) => res.send('novo cliente'))
  .put((req, res) => res.send('editar cliente'))
  .delete((req, res) => res.send('remove cliente'));

const porta = 3000;
app.listen(porta, () => console.log('Executando...'));
