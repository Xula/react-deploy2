const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Fornece acesso aos arquivos da pasta build que contem a aplicação React compilada
app.use(express.static(__dirname + '/client/build/'));

// Pode ser que seja necessário alterar as rotas caso ocorra algum problema
// Rotas da API devem vir antes do envio da SPA (coloca-las abaixo)

app.get('/api/mensagem', (req, res) => {
    res.json({ message: 'Mensagem da API'});
    res.end();
});

// Envia a SPA
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

app.listen(process.env.PORT || 5000, console.log('Running server'));