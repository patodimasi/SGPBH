const express = require('express');
const app = express();
const usuario = require('../archivos/usuarios.json');
const PUERTO = 3000;
const path = require('path');


app.use(express.static(path.resolve(__dirname, '../client')));

app.post('/api',(req,res) => {
  //  res.send('Probando el servidor');
   /* const usuario = req.body.usuario;
    const clave = req.query.clave;

    if(usuario == 'fmendoza' && clave=='123456'){
        console.log("Credenciales correctas");
    }
    else{
        res.status(400).send("Credenciales incorrectas");
    }
    */
 
   console.log("mostardatosusuario " + (req.body));
   
})




app.listen(PUERTO, () => {
    console.log('El servidor esta escuchando en el puerto: 3000');
})