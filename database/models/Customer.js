const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    // EL ALIAS VA EN PLURAL 
    let alias = "Customers"
    // DEFINIR COLUMNAS - NO  DEBE FALTAR EL TYPE
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        shipping_addres: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        telephone:{
            type: dataTypes.STRING
        },
        birth_date: {
            type: dataTypes.DATE
        }, 
        created_at:{
            type: dataTypes.DATE
        }, 
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }

    // No agregamos config, de timestamps
    let config = {
        tableName: "Customers"
    }

    const Customer = sequelize.define(alias, cols, config)

    return Customer
}