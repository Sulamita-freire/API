// importando express
const express = require('express');
//importando API
const routes = require('./routes');

//pegando importação e inicializando
const app = express();

//utilizar o json do insomnia
app.use(express.json());
app.use(routes);

//função que pode executar algo, fseta pode substituir fuction, qdo função tem 1 linha pode tirar as chaves
app.listen(3333, () => console.log('Server running on port 3333'));
