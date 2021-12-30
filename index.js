const express = require('express');
const bodyParser = require('body-parser');

//exportamos NotasResource
var NotasResource = require("./notasResource");

//declaramos el puerto
const port = (process.env.PORT || 16778);
const baseAPI = "/v1";

//inicializamos express
const app = express();

app.use(bodyParser.json());

app.get(BASE_API_PATH+"/notas", (request, response) => {

    console.log("GET all notas");

    NotasResource.getAllNotas()
    .then((body) => {
        response.send(body);
    })
    .catch((error) => {
        console.log("error: "+error);
        response.sendStatus(500);
    });
});

app.listen(port, () => {
    console.log("Servidor del cliente is running");
})