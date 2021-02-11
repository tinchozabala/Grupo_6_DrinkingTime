module.exports = function(sequelize, dataTypes) {
    let alias = "Bills";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER,
            allowNull: false
        },
        customer_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total:{
            type: dataTypes.INTEGER,
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
        tableName: 'bills',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

    const Bill = sequelize.define(alias, cols, config);

    Bill.associate = function(models) {
        Bill.belongsTo(models.Customers, {
            as: "customers", 
            foreignKey: "customer_id"
        })
        Bill.hasMany(models.Sells, {
            as: "Bills",
            foreignKey: "bill_id"
        })
    }

    return Bill
}