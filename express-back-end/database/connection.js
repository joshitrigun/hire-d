require("dotenv").config();
<<<<<<< HEAD
const pg = require("pg");
=======
const pg = require('pg');
>>>>>>> 87f688ba5e3d8f1a7b9d395803efd1453f0f3cb9
const Client = pg.Client;


const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};
const client = new Client(config);

client.connect(() => {
  console.log("connected to the database");
});

module.exports = client;
