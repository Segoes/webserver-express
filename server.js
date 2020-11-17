const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Un middleware se ejecuta independientemente de la url que el usuario use.
app.use(express.static(__dirname + '/public'));

// Parciales de HBS -  __dirname es una variable global que te da el path de tu app
hbs.registerPartials(__dirname + '/views/partials');

// Express HBS
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    let salida = {
        nombre: 'Sergio',
        edad: 32,
        url: req.url
    }

    // res.send(salida);

    // Funcion de HBS
    res.render('home', {
        nombre: 'Sergio',
    });

});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));