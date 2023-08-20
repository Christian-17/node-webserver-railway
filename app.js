const express = require('express');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
//handlebar
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials',);



// servir cotenido estatico 
app.use( express.static('public/sitio-web') );

app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'Christian Perez',
    titulo: 'Curso de node'
  });
});

  app.get('/generic', (req, res) => { 
      res.render('generic',{
        nombre: 'Christian Perez',
        titulo: 'Curso de node'
      });
});

app.get("/elements", (req, res) => {
  res.render('elements',{
    nombre: 'Christian Perez',
    titulo: 'Curso de node'
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/sitio-web/index.html");
});

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

