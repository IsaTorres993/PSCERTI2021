const express = require('express');
const server = express();
var extenso = require('extenso');

//Mandando informações para a página principal
server.get('', (req, res) => {
    res.send('Bem vindo ao localhost! :D </br> </br> Jogue um número na requisição de -99999 a 99999 para vê-lo em extenso!');
});

//Tentando interceptar a informação na requisição com webRequest
server.get('/manifest.json', (req,res) => {
    console.log(extenso(req));
    res.send(extenso(req));
});

//Testando a conectividade da porta
server.listen(3001, () => {
    console.log('Api online');
});