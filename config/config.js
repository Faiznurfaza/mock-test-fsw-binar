require('dotenv').config();

module.exports = {
  dialect: process.env.PGDIALECT,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDABATASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
};
