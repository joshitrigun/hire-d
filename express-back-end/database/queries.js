const pg = require("pg");
const client = require("./connection");

const getAllUsers = (request, response) => {
  client.query("SELECT * FROM users;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllJobs = (request, response) => {
  client.query("SELECT * FROM jobs;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllProjects = (request, response) => {
  client.query("SELECT * FROM projects;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllCertifications = (request, response) => {
  client.query("SELECT * FROM certifications;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = { getAllUsers, getAllJobs, getAllProjects, getAllCertifications };
