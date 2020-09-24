// Importamos la libreria express
const express = require('express');
const app = express();

// Importamos la libreria hbs
const hbs = require('hbs');

// Importamos los helpers
require('./hbs/helpers');

// Obtenemos el puerto de heroku
const port = process.env.PORT || 3000;

// Middlewhere para cargar contenido estático
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {}); // registramos el directorio de parciales
app.set('view engine', 'hbs'); // Usamos el handlebars hbs

// Ahora, con express, sólo escuchamos las peticiones GET: '/' , las demás dan error
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'agustín domínguez',
    }); // Usamos el archivo .hbs

});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'agustín domínguez'
    }); // Usamos el archivo .hbs

});

// // Ahora, con express, sólo escuchamos las peticiones GET: '/' , las demás dan error
// app.get('/', (req, res) => {

//     // res.send('Hola Mundo');

//     let salida = {
//         nombre: 'Agustín',
//         apellido: 'Domínguez',
//         edad: 55,
//         url: req.url
//     }

//     res.send(salida); // No hace falta convertirlo a cadena con JSON.stringfy porque el send ya lo detecta y lo hace junto con los heads

// });

// // Conesto, con express, sólo escuchamos las peticiones GET: '/data', las demás dan error
// app.get('/data', (req, res) => {

//     res.send('Hola Data');

// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});