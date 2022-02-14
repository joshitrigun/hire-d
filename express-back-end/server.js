const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");

const { getAllUsers, getAllJobs, getAllProjects, getAllCertifications } = require("./database/queries");
// const { client } = require("./database/connection");
const PORT = 8080;

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/users", getAllUsers);
App.get("/api/jobs", getAllJobs);
App.get("/api/projects", getAllProjects);
App.get("/api/certifications", getAllCertifications);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
