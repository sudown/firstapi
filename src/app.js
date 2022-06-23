// Importação CommonJS modules
const express = require('express');
const users = require('./controllers/UserController')


// Criar aplicação WEB express
const app = express();
// Midlewares

// Rotas (End Points)
app.get('/', (req, res) => {
  res.send('Esta é a rota raiz da aplicação!');
});

app.get('/users', (req, res) => {
  res.status(200).json[{
    email: 'jobsontenorio@gmail.com',
    password: 'a',
  }];
  res.send('hello')
});

app.post('/users', (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    userController.addUser(user);
    res.status(201).json(user);
  });

// Exportar a aplicação
module.exports = app;
