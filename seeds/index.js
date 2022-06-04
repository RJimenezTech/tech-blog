const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedBlogs();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  process.exit(0);
};

seedAll();
