const { response } = require("express");
const pg = require("pg");
const client = require("./connection");

const getAllUsers = (request, response) => {
  const queryString = "SELECT * FROM users WHERE employer = false ORDER BY id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUser = (request, response) => {
  const id = request.params.id;
  const queryString = `SELECT * FROM users WHERE id = ${id};`;
  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllEmployers = (request, response) => {
  const queryString = "SELECT * FROM users WHERE employer = true ORDER BY id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getEmployerById = (request, response) => {
  const id = request.params.id;
  const queryString = `SELECT * FROM users WHERE employer = true AND users.id = ${id};`;

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const getAllJobs = (request, response) => {
  const queryString = "SELECT * FROM jobs  ORDER BY id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllProjects = (request, response) => {
  const queryString = "SELECT * FROM projects ORDER BY id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProject = (request, response) => {
  const id = request.params.id;
  const queryString = `SELECT * FROM projects WHERE id = ${id};`;
  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllCertifications = (request, response) => {
  const queryString = "SELECT * FROM certifications ORDER BY id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createProject = (request, response) => {
  const {
    title,
    description,
    owner_id,
    likes,
    projectLink,
    screenshot,
    stack,
  } = request.body;
  const queryString =
    "INSERT INTO projects (title, owner_id, tech_stack, screenshot, description, project_url, likes) VALUES ($1, $2, $3, $4, $5, $6, $7);";
  client.query(
    queryString,
    [title, owner_id, stack, screenshot, description, projectLink, likes],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Project Added`);
    }
  );
};

const createUser = (request, response) => {
  const {
    first_name,
    last_name,
    email,
    number,
    password,
    designation,
    about,
    city,
    province,
    github_url,
    linkedin_url,
    resume,
    avatar,
    skills,
    employer,
  } = request.body;

  const queryString =
    "INSERT INTO users (first_name, last_name, email, password, designation, about_me, phone_number, avatar, city, province, skills, github_url, linkedin_url ,employer, resume) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);";
  client.query(
    queryString,
    [
      first_name,
      last_name,
      email,
      password,
      designation,
      about,
      number,
      avatar,
      city,
      province,
      skills,
      github_url,
      linkedin_url,
      employer,
      resume,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User Added`);
    }
  );
};

const updateUser = (request, response) => {
  const {
    id,
    first_name,
    last_name,
    email,
    number,
    password,
    designation,
    about,
    city,
    province,
    github_url,
    linkedin_url,
    resume,
    avatar,
    skills,
    employer,
  } = request.body.data;

  const queryString = `UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, designation = $5, about_me = $6, phone_number = $7, avatar = $8, city = $9, province = $10, skills = $11, github_url = $12, linkedin_url = $13, employer = $14, resume = $15 WHERE id = $16;`;

  client.query(
    queryString,
    [
      first_name,
      last_name,
      email,
      password,
      designation,
      about,
      number,
      avatar,
      city,
      province,
      skills,
      github_url,
      linkedin_url,
      employer,
      resume,
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log(results);
      response.status(201).send(`User Updated`);
    }
  );
};

const updateProject = (request, response) => {
  const {
    id,
    title,
    description,
    owner_id,
    likes,
    projectLink,
    screenshot,
    stack,
  } = request.body;

  const queryString = `UPDATE projects SET title = $1, owner_id = $2, tech_stack = $3, screenshot = $4, description = $5, project_url = $6, likes = $7 WHERE id = $8;`;

  client.query(
    queryString,
    [title, owner_id, stack, screenshot, description, projectLink, likes, id],
    (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log(results);
      response.status(201).send(`Project Updated`);
    }
  );
};

const createCertification = (req, res) => {
  const {
    title,
    startDate,
    endDate,
    institution,
    city,
    province,
    jobSeekerId,
  } = req.body;
  const queryString =
    "INSERT INTO certifications (title, start_date, end_date, institution, city, province, jobseeker_id) VALUES ($1, $2, $3, $4, $5, $6, $7);";
  client.query(
    queryString,
    [title, startDate, endDate, institution, city, province, jobSeekerId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send("Certification Added");
    }
  );
};

const createJobs = (request, response) => {
  const {
    title,
    description,
    jobtype,
    stack,
    salary,
    startDate,
    endDate,
    featured,
    employerId,
    applyLink,
  } = request.body;

  const queryString =
    "INSERT INTO jobs (title, description, job_type, tech_stack, salary, start_date, end_date, featured, employer_id, apply_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10); ";
  client.query(
    queryString,
    [
      title,
      description,
      jobtype,
      stack,
      salary,
      startDate,
      endDate,
      featured,
      employerId,
      applyLink,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(201).send(`Job added`);
    }
  );
};

const getProjectsWithUsers = (request, response) => {
  const queryString = `SELECT projects.*, users.first_name as first_name, users.last_name as last_name FROM projects JOIN users ON users.id = projects.owner_id;`;

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getHotJobsWithUser = (request, response) => {
  const queryString =
    "SELECT jobs.*, users.first_name as first_name, users.city as city, users.province as province FROM jobs LEFT JOIN users ON users.id = jobs.employer_id WHERE jobs.featured = true ORDER BY jobs.salary DESC;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUsersProjectsCertifications = (request, response) => {
  const queryString =
    "SELECT DISTINCT users.*, certifications.*, certifications.city as c_city, certifications.province as c_province, projects.screenshot, projects.title as project_title, projects.likes, projects.owner_id FROM users LEFT JOIN projects ON users.id = projects.owner_id LEFT JOIN certifications ON users.id = certifications.jobseeker_id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getJobsWithEmployers = (request, response) => {
  const queryString =
    "SELECT jobs.*, users.first_name as first_name, users.city as city, users.province as province FROM jobs JOIN users ON users.id = jobs.employer_id ORDER BY jobs.id;";

  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCertification = (request, response) => {
  const queryString = `SELECT * From certifications WHERE id = $1;`;
  const value = [request.params.id];

  client.query(queryString, value, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const updateCertification = (request, response) => {
  const {
    title,
    startDate,
    endDate,
    institution,
    city,
    province,
    jobSeekerId,
    cert_id,
  } = request.body;

  const queryString = `UPDATE certifications SET title = $1, start_date = $2, end_date = $3, institution = $4, city = $5, province = $6, jobseeker_id = $7 WHERE id = $8;`;
  const value = [
    title,
    startDate,
    endDate,
    institution,
    city,
    province,
    jobSeekerId,
    cert_id,
  ];

  client.query(queryString, value, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("Certfication Updated");
  });
};
const getJob = (request, response) => {
  const id = request.params.id;
  const queryString = `SELECT * FROM jobs WHERE id = ${id};`;
  client.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const updateJob = (request, response) => {
  const {
    id,
    title,
    description,
    jobtype,
    stack,
    salary,
    startDate,
    endDate,
    featured,
    applyLink,
  } = request.body;

  console.log("request body data", request.body);

  const queryString = `UPDATE jobs SET title = $1, description = $2, job_type = $3, tech_stack = $4, salary = $5, start_date = $6, end_date = $7, featured = $8, apply_link = $9 WHERE id = $10;`;

  client.query(
    queryString,
    [
      title,
      description,
      jobtype,
      stack,
      salary,
      startDate,
      endDate,
      featured,
      applyLink,
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log(results);
      response.status(201).send(`Job Updated`);
    }
  );
};

const updateEmployer = (request, response) => {
  const id = request.params.id;

  const {
    first_name,
    email,
    number,
    password,
    designation,
    about,
    city,
    province,
    avatar,
    linkedin,
  } = request.body;

  const queryString = `UPDATE users SET first_name = $1, email = $2, phone_number = $3, password = $4, city = $5, province = $6, designation = $7, avatar = $8, about_me = $9, linkedin_url = $10 WHERE id = $11;`;
  const value = [
    first_name,
    email,
    number,
    password,
    city,
    province,
    designation,
    avatar,
    about,
    linkedin,
    id,
  ];

  client.query(queryString, value, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("Employer updated");
  });
};

const deleteProject = (request, response) => {
  const id = request.params.id;

  const queryString = `DELETE FROM projects WHERE id = $1;`;
  client.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("Project Deleted");
  });
};

const deleteCertification = (request, response) => {
  const id = request.params.id;

  const queryString = `DELETE FROM certifications WHERE id = $1;`;
  client.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("Certification Deleted");
  });
};

const deleteJob = (request, response) => {
  const id = request.params.id;

  const queryString = `DELETE FROM jobs WHERE id = $1;`;
  client.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("Job Deleted");
  });
};

module.exports = {
  getAllUsers,
  getUser,
  getAllEmployers,
  getEmployerById,
  getAllJobs,
  getAllProjects,
  getProject,
  getAllCertifications,
  getProjectsWithUsers,
  getUsersProjectsCertifications,
  createProject,
  updateProject,
  createUser,
  updateUser,
  getHotJobsWithUser,
  getJobsWithEmployers,
  createCertification,
  createJobs,
  getCertification,
  updateCertification,
  updateEmployer,
  getJob,
  updateJob,
  deleteProject,
  deleteCertification,
  deleteJob,
};
