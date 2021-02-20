const fs = require ('fs')
const path = require ('path')
const db = require("../database/models");
const { catalog } = require('./productsController');

const categoriesController = {
    promociones : (req, res, next) =>{
        db.Products.findAll({ 
            where: {
                category_id : 1
            }
        })
        .then( (resultado) => {
            res.render("catalog", {resultado:resultado})
        })
    },

    cervezas : (req, res, next) =>{
        db.Products.findAll({ 
            where: {
                category_id : 2
            }
        })
        .then( (resultado) => {
            res.render("catalog", {resultado:resultado})
        })
    },

    vinos : (req, res, next) =>{
        db.Products.findAll({ 
            where: {
                category_id : 4
            }
        })
        .then( (resultado) => {
            res.render("catalog", {resultado:resultado})
        })
    },
    
    aperitivos : (req, res, next) =>{
        db.Products.findAll({ 
            where: {
                category_id : 5
            }
        })
        .then( (resultado) => {
            res.render("catalog", {resultado:resultado})
        })
    },

    espirituosas : (req, res, next) =>{
        db.Products.findAll({ 
            where: {
                category_id : 6
            }
        })
        .then( (resultado) => {
            res.render("catalog", {resultado:resultado})
        })
    },


}



module.exports = categoriesController