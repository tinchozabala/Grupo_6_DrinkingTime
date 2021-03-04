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
            ,
            include: ['category']
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
            ,
            include: ['category']
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
            ,
            include: ['category']
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
            ,
            include: ['category']
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
            ,
            include: ['category']
        })
        .then( (resultado) => {
            res.render("catalog", {resultado:resultado})
        })
    },


}



module.exports = categoriesController