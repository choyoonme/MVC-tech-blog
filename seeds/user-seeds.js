const { User } = require("../models");

const userData = [
  {
    name: "taylor",
    email: "taylor@gmail.com",
    password: "password1",
  },
  {
    name: "seymour",
    email: "seymour@gmail.com",
    password: "password2",
  },
  {
    name: "nancy",
    email: "nancy@gmail.com",
    password: "password3",
  },
  {
    name: "phil",
    email: "phil@gmail.com",
    password: "password4",
  },
  {
    name: "barry",
    email: "barry@gmail.com",
    password: "password5",
  },
  {
    name: "paula",
    email: "paula@gmail.com",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
