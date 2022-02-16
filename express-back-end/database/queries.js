const pg = require("pg");
const client = require("./connection");

const getAllUsers = (request, response) => {

  const queryString = "SELECT * FROM users;"

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllJobs = (request, response) => {

  const queryString = "SELECT * FROM jobs;"

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllProjects = (request, response) => {

const queryString = "SELECT * FROM projects;"

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllCertifications = (request, response) => {

  const queryString = "SELECT * FROM certifications;"

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProjectsWithUsers = (request, response) => {

  const queryString = `SELECT projects.*, users.first_name as first_name, users.last_name as last_name FROM projects JOIN users ON users.id = projects.owner_id;`

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getJobsWithUser = (request, response) => {

  const queryString = "SELECT jobs.*, users.first_name as first_name, users.city as city, users.province as province FROM jobs LEFT JOIN users ON users.id = jobs.employer_id WHERE jobs.featured = true ORDER BY jobs.salary DESC;"

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
};

module.exports = { getAllUsers, getAllJobs, getAllProjects, getAllCertifications, getProjectsWithUsers, getJobsWithUser };
