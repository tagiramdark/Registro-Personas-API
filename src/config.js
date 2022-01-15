const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + ".env"),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: Number(process.env.PORT),
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT),
    dialect: process.env.DATABASE_DIALECT,
    pool: {
      max: Number(process.env.DATABASE_POOL_MAX),
      min: Number(process.env.DATABASE_POOL_MIN),
      acquire: Number(process.env.DATABASE_POOL_ACQUIRE),
      idle: Number(process.env.DATABASE_POOL_IDLE),
    },
    logging:false
  },
  MODE: "combined",
};
