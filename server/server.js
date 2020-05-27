require('./config/config'); //es para definir variables globales desde config, como por ejemplo  el server, se define la variable global process.env.PORt

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//middleware, funciones que se van a ejecutar cuando pasen por esa lineas   //Middleware o lógica de intercambio de información entre aplicaciones (interlogical) es un software que asiste a una aplicación para interactuar o comunicarse con otras aplicaciones, o paquetes de programas, redes, hardware o sistemas operativos. Este simplifica el trabajo de los programadores en la compleja tarea de generar las conexiones y sincronizaciones que son necesarias en los sistemas distribuidos. De esta forma, se provee una solución que mejora la calidad de servicio, así como la seguridad, el envío de mensajes, la actualización del directorio de servicio, etc.1​
//el app.use son middleware ->


app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get("usuario", function(req, res) {
    res.json("hola ql");
})

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
})

app.post('/usuario', function(req, res) {
    let body = req.body; //es el body aque aparece cuando el bodyParser procese cualquier payload

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario."
        }); //es para dedifin elstatus de respuesta y el mensaje que se quiere en este caso, en el cual no hay nombre
    }

    res.json({
        persona: body
    });
})

app.delete('/usuario', function(req, res) {
    res.json("delete usuario");

})

app.listen(process.env.PORT, () => { console.log("escuchando puerto: ", process.env.PORT); })