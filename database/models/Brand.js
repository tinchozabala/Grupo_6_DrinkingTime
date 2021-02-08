module.exports = function(sequelize, dataTypes) {
    let alias = "Brands";
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
        tableName: 'brands',
        timestamps: true,
    }

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models) {
        Brand.hasMany(models.Products, {
            as: "products", 
            foreignKey: "brand_id"
        })
   }

    return Brand
}