const fs = require('node:fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
    cb(data.toString());
          
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
       if(err) {
        console.log('No he podido escribirlo', err);
        
       } else {
        console.log('Hola, Se ha escrito correctamente');
        
       }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Hola, Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo.txt', console.log );
borrar(__dirname + '/archivo1.txt', console.log);

