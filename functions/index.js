const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.helloWorld = onRequest((request, response) => {
    const lista = [
        {
            name: "Sergio Medina",
            id: 1,
            email: "sergiod.medina@davinci.edu.ar"
        }
    ]
  response.send(lista);
});

exports.createUser = onRequest((request, response) => {
  response.send({
    message: "Usuario creado correctamente"
  });
});
