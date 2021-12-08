const express = require('express');


const app = express();

app.listen(3000, Marvellous);

function Marvellous(request, response) {
    console.log("Mrvellous Server is started...");
}

app.get('/getBatches', getBatches);

function getBatches(request, response) {
    response.json({
        "Batch": "Angular",
        "Fes": 1200
    });
}

app.get('/', Home);

function Home(request, response) {
    response.json("Welcome to Marvellous");
}