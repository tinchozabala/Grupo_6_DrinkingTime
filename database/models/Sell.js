module.exports = function(sequelize, dataTypes) {
    let alias = "Sells";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        bill_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cuantify:{
            type: dataTypes.INTEGER
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
    };
    let config = {
        tableName: 'sells',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

    const Sell = sequelize.define(alias, cols, config);

    Sell.associate = function(models) {
        Sell.belongsTo(models.Customers, {
            as: "Bills", 
            foreignKey: "bill_id"
        })
    }
    Sell.associate = function(models) {
        Sell.belongsTo(models.Products, {
            as: "Products", 
            foreignKey: "product_id"
        })
    }
    return Sell
}