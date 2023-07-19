const { DataTypes } = require("sequelize");
// --------------- DB -modules ---------------

const { UsersType } = require('./UsersType');
// --------------- otra tabla ----------------

module.exports = (sequelize) =>
  {
    sequelize.define('user', {

        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        },

        email: {
        type: DataTypes.STRING,
        allowNull: false,
        },

        passwordKey: {
        field: "password_key",
        type: DataTypes.STRING,
        allowNull: false,
        },

        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },

        // --------para el dashboard---------
        isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        },

        deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        },
        // ----------------------------------

    });
};