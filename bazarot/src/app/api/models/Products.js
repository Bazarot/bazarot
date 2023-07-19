const { DataTypes } = require("sequelize");
// --------------- DB -modules ---------------

const { ProductsType } = require('./PorductsType');
// --------------- otra tabla ----------------

module.exports = (sequelize) =>
  {
    sequelize.define('product', {

        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        },

        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        },

        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

    });
};