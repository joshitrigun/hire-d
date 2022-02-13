const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');

const user = [
  {
    id: 1,
    first_name: 'Trigun',
    last_name: 'Joshi',
    email: 'trigunjoshi@gmail.com',
    password: 'password',
    designation: 'Full Stack Developer',
    about_me: 'I am a Full Stack Developer. I love to work with both front-end and back-end.',
    phone_number: '6475558496',
    avatar: 'https://avatars.githubusercontent.com/u/15637663?v=4',
    city: 'Richmond',
    province: 'BC',
    skills: 'JavaScript, Node.js, Express.js, React.js, jQuery, TypeScript, Testing, SASS, CSS, HTML',
    github_url: 'https://github.com/joshitrigun',
    linkedin_url: 'https://www.linkedin.com/in/tjoshi2020/',
    employer: false
  },
  {
    id: 2,
    first_name: 'David',
    last_name: 'Alpain',
    email: 'davealpain@outlook.com',
    password: 'password',
    designation: 'Full Stack Developer',
    about_me: 'I am a Junior Full Stack Developer with lots of dearms!',
    phone_number: '6276658597',
    avatar: 'https://www.pexels.com/photo/man-sitting-cozy-while-working-on-his-laptop-3153203/',
    city: 'Vancouver',
    province: 'BC',
    skills: 'JavaScript, Node.js, Express.js, React.js, Ruby on Rails, jQuery, TypeScript, Testing',
    github_url: 'https://github.com/davidalpain',
    linkedin_url: 'https://www.linkedin.com/in/tdavidalpain/',
    employer: false
  }
]


const { getAllUsers } = require('./database/queries');
const { client } = require('./database/connection');
const PORT = 8080;

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));



// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));


App.get('/api/users', (req,res) => {
  // console.log(users);
  // console.log(res);
  res.json(user);
})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});