const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");

const {
  getAllUsers,
  getAllEmployers,
  getEmployerById,
  getUser,
  getAllJobs,
  getAllProjects,
  getAllCertifications,
  getProjectsWithUsers,
  getUsersProjectsCertifications,
  createProject,
  getProject,
  updateProject,
  createUser,
  updateUser,
  getHotJobsWithUser,
  getJobsWithEmployers,
  createCertification,
  createJobs,
  getCertification,
  updateCertification,
  updateEmployer
} = require("./database/queries");

const PORT = 8080;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors(corsOptions));

App.get("/api/users", getAllUsers);
App.get("/api/employers", getAllEmployers);
App.get("/api/employers/:id", getEmployerById);
App.get("/api/users/:id", getUser);
App.get("/api/jobs", getAllJobs);
App.get("/api/projects", getAllProjects);
App.get("/api/projects/:id", getProject);
App.get("/api/certifications", getAllCertifications);
App.get("/api/user_projects", getProjectsWithUsers);
App.get("/api/jobs_users", getHotJobsWithUser);
App.get("/api/users_projects_certifications", getUsersProjectsCertifications);
App.get("/api/jobs_employers", getJobsWithEmployers);
App.get("/api/certifications/:id", getCertification);

App.post("/api/projects", createProject);
App.post("/api/users", createUser);
App.post("/api/certifications", createCertification);
App.post("/api/jobs", createJobs);

App.put("/api/certifications/:id", updateCertification);
App.put("/api/users/:id", updateUser);
App.put("/api/projects/:id", updateProject);
App.put("/api/employers/:id", updateEmployer);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
