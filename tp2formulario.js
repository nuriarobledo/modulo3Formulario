var express = require ('express');
var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Envio el HTML en el GET request
app.get("/", (req, res) => {
    res.send(__dirname + "\public\formulariotp2.html")
})
app.post("/resultado", (req, res) =>{
    const nombre= req.body.Nombre;
    const apellido = req.body.Apellido;
    const edad=  req.body.Edad;
    const nacimiento = req.body.PaisN;
    const residencia= req.body.PaisR ;
    const html = '<!DOCTYPE html><html lang="en"><head><script src="tp2formulario.js" ></script></head><body><h3>Formulario con servidor</h3><p>Nombre: '+ Nombre + '</p> '+' <p>Apellido: ' + Apellido + '</p>'+' <p>Edad: ' + Edad +' </p> '+' <p>Pais de Nacimiento:'+ PaisN +' </p> '+'<p>Pais de residencia: ' + PaisR+' </p> '+'<p></p><button><a href="/">Volver al registro</a></button></body></html>'
    res.send(html);
});

app.get("*", (req,res) => {
    res.redirect("/");
}) 
app.listen (3000,function() {
    console.log('express iniciado en el puerto 3000.');
});