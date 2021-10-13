const express = require("express");
const app = express();

app.use(express.json());

// Endpoints de 'Hello'

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});

// Lista de heróis

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// Endpoint de Read All

app.get("/herois", function (req, res) {
    res.send(lista);
});

// Endpoint de Read Single (by Id)

app.get("/herois/:id", function (req, res) {
    const id = +req.params.id - 1;

    const item = lista[id];

    res.send(item);
});

// Endpoint de Create

app.post("/herois", function (req, res) {
    const item = req.body;

    lista.push(item.nome);

    res.send(item.nome + " adicionado(a) com sucesso.");
});

// Endpoint de Update

app.put("/herois/:id", function (req, res) {
    const id = +req.params.id - 1;

    const item = req.body;

    lista[id] = item.nome;

    res.send(item.nome + " atualizado(a) com sucesso.");
});

// Endpoint de Delete

app.delete("/herois/:id", function (req, res) {
    const id = +req.params.id - 1;

    delete lista[id];

    res.send("Item removido com sucesso.");
});

app.listen(3000);
