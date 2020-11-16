const express = require ("express");
const app = express(); 

app.get ("/", function(req, res){
    res.sendFile (__dirname + "/views/index.html")
})

app.get ("/inicia-sesion", function(req, res){
    res.sendFile (__dirname + "/views/login.html")
})

app.get ("/carrito-de-compras", function(req, res){
    res.sendFile (__dirname + "/views/productCart.html")
})

app.get ("/detalle-del-producto", function(req, res){
    res.sendFile (__dirname + "/views/productDetail.html")
})

app.get ("/registrate", function(req, res){
    res.sendFile (__dirname + "/views/.html")
})