const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "sampleuser1",
    email: "sampleuser1@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser2",
    email: "sampleuser2@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser3",
    email: "sampleuser3@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser4",
    email: "sampleuser4@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser5",
    email: "sampleuser5@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser6",
    email: "sampleuser6@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser7",
    email: "sampleuser7@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser8",
    email: "sampleuser8@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser9",
    email: "sampleuser9@mail.com",
    password: "password123",
  },
  {
    username: "sampleuser10",
    email: "sampleuser10@mail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
