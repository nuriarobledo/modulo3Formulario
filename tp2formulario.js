var express = require ('express');
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.sendFile (__dirname + "/public/formulariotp2.html")
});

app.post('/resultado', function(req, res){
    const nombre = req.body.Nombre;
    const apellido = req.body.Apellido;
    const edad = req.body.Edad;
    const nacimiento = req.body.PaisN;
    const residencia= req.body.PaisR ;
    const html = '<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="formulariotp2.css"></script></head><body><h3>Compruebe sus datos</h3><div class="datosform"><p>Nombre: '+ nombre + '</p> '+' <p>Apellido: ' + apellido + '</p>'+' <p>Edad: ' + edad +' </p> '+' <p>Pais de Nacimiento: '+ nacimiento +' </p> '+'<p>Pais de residencia: ' + residencia +' </p></div> '+'<p></p><button id=button2><a href="/">Volver al registro</a></button></body></html>'
    res.send(html);
});

app.get("*", (req, res)=> {
    res.redirect("/");
});

app.listen (3000,function() {
    console.log('express iniciado en el puerto 3000.');
});