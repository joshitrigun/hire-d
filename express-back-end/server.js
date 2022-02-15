const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");

const {
  getAllUsers,
  getAllJobs,
  getAllProjects,
  getAllCertifications,
  createProject,
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
// App.use(cors(), function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Sample GET route
App.get("/api/users", getAllUsers);
App.get("/api/jobs", getAllJobs);
App.get("/api/projects", getAllProjects);
App.get("/api/certifications", getAllCertifications);

App.post("/api/projects", createProject);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
