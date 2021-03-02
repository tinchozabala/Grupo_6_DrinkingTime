module.exports = function(sequelize, dataTypes) {
    let alias = "Products";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        brand_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_detail: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
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
        tableName: 'products',
        timestamps: true, 
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Brands,{
            as: "brand",
            foreignKey: "brand_id"
        })
        Product.belongsTo(models.Categories,{
            as: "category",
            foreignKey: "category_id"
        })
    }

    
        
   

    // RELACION EN PROBLEMA 
    //Product.hasMany(models.Customers, {
    //        Product.associate = function(models) {
    //        as: "sells", 
    //        foreignKey: "product_id"
    //    })
    //}

    return Product
}