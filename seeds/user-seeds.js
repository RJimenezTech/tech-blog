const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "urethrathink",
    email: "urethrathink@mail.com",
    password: "password123",
  },
  {
    username: "gingerbreaddrafty",
    email: "gingerbreaddrafty@mail.com",
    password: "password123",
  },
  {
    username: "comparatorfoxglove",
    email: "comparatorfoxglove@mail.com",
    password: "password123",
  },
  {
    username: "vivacioustake",
    email: "vivacioustake@mail.com",
    password: "password123",
  },
  {
    username: "onesiespantsuit",
    email: "onesiespantsuit@mail.com",
    password: "password123",
  },
  {
    username: "warnoperating",
    email: "warnoperating@mail.com",
    password: "password123",
  },
  {
    username: "forcefuldiving",
    email: "forcefuldiving@mail.com",
    password: "password123",
  },
  {
    username: "rabbitchide",
    email: "rabbitchide@mail.com",
    password: "password123",
  },
  {
    username: "concertouch",
    email: "sampleuser9@mail.com",
    password: "password123",
  },
  {
    username: "campshattered",
    email: "campshattered@mail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
