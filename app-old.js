
const { log } = require('console');
const http = require('http');

http.createServer( ( req, res ) => {

    // res.writeHead(200, {'Content-Type': 'application/json' })
    // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv' })

    res.write( 'Hola Mundo' );
    res.end();
    // res.write( '1, Christian\n' );
    // res.write( '2, Maria\n' );
    // res.write( '3, Juan\n' );
    // res.write( '4, Pedro\n' );

}) 

.listen( 8080 );

console.log('escuchando el puerto ', 8080 ); 



