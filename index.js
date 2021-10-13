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

const lista = [
    {
        nome: "Mulher Maravilha",
    },
    {
        nome: "Capitã Marvel",
    },
    {
        nome: "Homem de Ferro",
    },
];

// Endpoint de Read All

app.get("/herois", function (req, res) {
    res.send(lista.filter(Boolean));
});

// Endpoint de Read Single (by Id)

app.get("/herois/:id", function (req, res) {
    const id = +req.params.id - 1;

    const item = lista[id];

    if (!item) {
        res.status(404).send("Item não encontrado.");

        // Return encerra a função
        return;
    }

    res.send(item);
});

// Endpoint de Create

app.post("/herois", function (req, res) {
    const item = req.body;

    if (!item || !item.nome) {
        res.status(400).send(
            "Corpo da requisição não encontrado ou está faltando a chave 'nome'."
        );

        return;
    }

    lista.push(item.nome);

    res.send(item.nome + " adicionado(a) com sucesso.");
});

// Endpoint de Update

app.put("/herois/:id", function (req, res) {
    const id = +req.params.id - 1;

    if (!lista[id]) {
        res.status(404).send("Item não encontrado.");

        // Return encerra a função
        return;
    }

    const item = req.body;

    if (!item || !item.nome) {
        res.status(400).send(
            "Corpo da requisição não encontrado ou está faltando a chave 'nome'."
        );

        return;
    }

    lista[id] = item.nome;

    res.send(item.nome + " atualizado(a) com sucesso.");
});

// Endpoint de Delete

app.delete("/herois/:id", function (req, res) {
    const id = +req.params.id - 1;

    if (!lista[id]) {
        res.status(404).send("Item não encontrado.");

        // Return encerra a função
        return;
    }

    delete lista[id];

    res.send("Item removido com sucesso.");
});

app.listen(3000);
