const withAuth = (req, res, next) => {
  const x = 1;
  if (
    x === 1
    // !req.session.user_id
  ) {
    // res.redirect("/login");
    next();
  } else {
    next();
  }
};

module.exports = withAuth;
