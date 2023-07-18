require("dotenv").config();
const { Sequelize } = require("sequelize");
const product = require("./models/Products");
const productType = require("./models/PorductsType");
const users = require("./models/Users");
const usersType = require("./models/UsersType");

// const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
      }
    }
  }
);

// ----------------- Definición de los modelos -----------------

product(sequelize);
productType(sequelize);
users(sequelize);
usersType(sequelize);

// ------------------ Relaciones ---------------------------------

usersType.hasMany(users);
users.belongsTo(usersType);

users.belongsToMany(product, { through: "UserSellsProduct" });
product.belongsToMany(users, { through: "UserSellsProduct" });

productType.hasMany(product);
product.belongsTo(productType);

module.exports = sequelize;
