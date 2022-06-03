const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Blog, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all blogs
router.get("/", (req, res) => {
  console.log("======================");
  Blog.findAll({
    attributes: [
      "id",
      "blog_text",
      "title",
      "created_at",
      //   [
      //     sequelize.literal(
      //       "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
      //     ),
      //     "vote_count",
      //   ],
    ],
    include: [
      //   {
      //     model: Comment,
      //     attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      //     include: {
      //       model: User,
      //       attributes: ["username"],
      //     },
      //   },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a blog by ID
router.get("/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "blog_text",
      "title",
      "created_at",
      // [
      //   sequelize.literal(
      //     "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
      //   ),
      //   "vote_count",
      // ],
    ],
    include: [
      // {
      //   model: Comment,
      //   attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      //   include: {
      //     model: User,
      //     attributes: ["username"],
      //   },
      // },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post a new blog only if logged in
router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', blog_text: 'https://taskmaster.com/press', user_id: 1}
  Blog.create({
    title: req.body.title,
    blog_text: req.body.blog_text,
    // user_id: req.session.user_id,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update title && text, only if logged in though
router.put("/:id", withAuth, (req, res) => {
  Blog.update(
    {
      title: req.body.title,
      blog_text: req.body.blog_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
