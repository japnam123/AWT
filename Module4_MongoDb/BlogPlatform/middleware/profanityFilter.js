const Filter = require("bad-words");
const filter = new Filter();

const profanityFilter = (req, res, next) => {
  const { title, content } = req.body;

  const isProfane =
    filter.isProfane(title || "") || filter.isProfane(content || "");

  if (isProfane) {
    req.body.isFlagged = true; // mark for moderation
  }

  next(); // still let it pass to controller
};

module.exports = profanityFilter;
