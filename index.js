const express = require("express");
const app = express();

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

app.listen(3000);
