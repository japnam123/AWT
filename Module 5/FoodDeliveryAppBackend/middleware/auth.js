module.exports = (req, res, next) => {
  const user = { id: 1, name: "Abhi", role: "user" }; // dummy user
  req.user = user;
  next();
};
