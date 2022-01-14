const config = require("../config.js")
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    port:config.database.port,
    dialect:  config.database.dialect,    
    pool: {
      max:  config.database.pool.max,
      min:  config.database.pool.min,
      acquire:  config.database.pool.acquire,
      idle:  config.database.pool.idle
    },
    logging:config.database.logging
    
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.persona=require("./persona.model")(sequelize,Sequelize);

module.exports = db;