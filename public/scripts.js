var formdata = new FormData();
formdata.append("email", "sergiod.medina@davinci.edu.ar");
formdata.append("name", "Sergio Medina");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const URL_FUNCTION = "http://localhost:5000/nuevo-producto-526f8/us-central1";

fetch(`${URL_FUNCTION}/helloWorld`)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

fetch(`${URL_FUNCTION}/createUser`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));