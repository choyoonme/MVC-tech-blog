const { Post } = require("../models");

const postData = [
  {
    title: "Notetaker",
    post_content:
      "Notetaker will help you with reminders and staying organized.",
    user_id: 3,
  },
  {
    title: "Employee chart",
    post_content:
      "This will help companies keep track of new hires and whole team of employees",
    user_id: 1,
  },
  {
    title: "Day planner",
    post_content: "This will keep track of your appointments.",
    user_id: 2,
  },
  {
    title: "Portfolio update",
    post_content: "This will refactor your professional portfolio!",
    user_id: 5,
  },
  {
    title: "code quiz",
    post_content:
      "This app will ask you a few JS questions to test your knowledge.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
