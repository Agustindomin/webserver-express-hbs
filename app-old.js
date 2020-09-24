const http = require('http');

// Conesto escuchamos TODAS las peticiones GET: /, /data, /data/usuario/1, etc
http.createServer((req, res) => {

        res.writeProcessing(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Agustín',
            apellido: 'Domínguez',
            edad: 55,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola mundo');

        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');