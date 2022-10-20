const express = require('express');
const app = express();
const usuario = require('../archivos/usuarios.json');
const PUERTO = 3000;
const path = require('path');
const bodyparser = require('body-parser');

//app.use(express.static(path.resolve(__dirname, '../client')));
app.use(bodyparser.json());

app.post('/login',(req,res) => {
  //  res.send('Probando el servidor');
    const usuario = req.body.usuario;
    const clave = req.body.pass;

    if(usuario == 'pdimasi' && clave=='123456'){
      //  console.log("Credenciales correctas");
      res.status(200).send("correcto");
    }
    else{
        res.status(400).send("Credenciales incorrectas");
    }
    
 
 //  console.log("mostardatosusuario " + (req.body.Usuario));
   
})




app.listen(PUERTO, () => {
    console.log('El servidor esta escuchando en el puerto: 3000');
})