const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");

const {
  getAllUsers,
  getAllJobs,
  getAllProjects,
  getAllCertifications,
  getProjectsWithUsers,
  getUsersProjectsCertifications,
  createProject,
  createUser,
  getHotJobsWithUser,
  getJobsWithEmployers,
  createCertification,
  createJobs
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
App.get("/api/jobs", getAllJobs);
App.get("/api/projects", getAllProjects);
App.get("/api/certifications", getAllCertifications);
App.get("/api/user_projects", getProjectsWithUsers);
App.get("/api/jobs_users", getHotJobsWithUser);
App.get("/api/users_projects_certifications", getUsersProjectsCertifications);
App.get("/api/jobs_employers", getJobsWithEmployers);

App.post("/api/projects", createProject);
App.post("/api/users", createUser);
App.post("/api/certifications", createCertification);

App.post("/api/jobs", createJobs);


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
