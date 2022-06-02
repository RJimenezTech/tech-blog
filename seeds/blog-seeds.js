const sequelize = require("../config/connection");
const { Blog } = require("../models");

const blogdata = [
  {
    title: "I am user number 10 with username sampleuser10.",
    blog_text: "I hope you have a nice day. - sampluser10",
    user_id: 10,
  },
  {
    title: "I am user number 8 with username sampleuser8.",
    blog_text: "I hope you have a nice day. - sampluser8",
    user_id: 8,
  },
  {
    title: "I am user number 1 with username sampleuser1.",
    blog_text: "I hope you have a nice day. - sampluser1",
    user_id: 1,
  },
  {
    title: "I am user number 4 with username sampleuser4.",
    blog_text: "I hope you have a nice day. - sampluser4",
    user_id: 4,
  },
  {
    title: "I am user number 7 with username sampleuser7.",
    blog_text: "I hope you have a nice day. - sampluser7",
    user_id: 7,
  },
  {
    title: "I am user number 4 with username sampleuser4.",
    blog_text: "I hope you have a nice day. - sampluser4",
    user_id: 4,
  },
  {
    title: "I am user number 1 with username sampleuser1.",
    blog_text: "I hope you have a nice day. - sampluser1",
    user_id: 1,
  },
  {
    title: "I am user number 1 with username sampleuser1.",
    blog_text: "I hope you have a nice day. - sampluser1",
    user_id: 1,
  },
  {
    title: "I am user number 9 with username sampleuser9.",
    blog_text: "I hope you have a nice day. - sampluser9",
    user_id: 9,
  },
  {
    title: "I am user number 5 with username sampleuser5.",
    blog_text: "I hope you have a nice day. - sampluser5",
    user_id: 5,
  },
  {
    title: "I am user number 3 with username sampleuser3.",
    blog_text: "I hope you have a nice day. - sampluser8",
    user_id: 3,
  },
  {
    title: "I am user number 10 with username sampleuser10.",
    blog_text: "I hope you have a nice day. - sampluser10",
    user_id: 10,
  },
  {
    title: "I am user number 8 with username sampleuser8.",
    blog_text: "I hope you have a nice day. - sampluser8",
    user_id: 8,
  },
  {
    title: "I am user number 3 with username sampleuser3.",
    blog_text: "I hope you have a nice day. - sampluser3",
    user_id: 3,
  },
  {
    title: "I am user number 3 with username sampleuser3.",
    blog_text: "I hope you have a nice day. - sampluser3",
    user_id: 3,
  },
  {
    title: "I am user number 7 with username sampleuser7.",
    blog_text: "I hope you have a nice day. - sampluser7",
    user_id: 7,
  },
  {
    title: "I am user number 6 with username sampleuser6.",
    blog_text: "I hope you have a nice day. - sampluser6",
    user_id: 6,
  },
  {
    title: "I am user number 4 with username sampleuser4.",
    blog_text: "I hope you have a nice day. - sampluser4",
    user_id: 4,
  },
  {
    title: "I am user number 6 with username sampleuser6.",
    blog_text: "I hope you have a nice day. - sampluser6",
    user_id: 6,
  },
  {
    title: "I am user number 7 with username sampleuser7.",
    blog_text: "I hope you have a nice day. - sampluser7",
    user_id: 7,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
