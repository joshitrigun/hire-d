const pg = require('pg');
const client = require('./connection');


const getAllUsers = (request, response) => {
  client.query("SELECT * FROM users;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = { getAllUsers }