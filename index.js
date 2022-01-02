const express = require("express");
var bodyParser = require("body-parser");
var NotasResource = require("./NotasResource");

var port = ( process.env.PORT || 3002 );

var BASE_API_PATH = "/v1";
//-> localhost:3002/v1/notas

var app = express();
app.use(bodyParser.json());

app.get(BASE_API_PATH+"/notas", (request, response) => {
    console.log("GET /notas");

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

    console.log("Server (client) ready and running!");

});