const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const profanityFilter = require("../middleware/profanityFilter");

router.post("/", profanityFilter, postController.createPost);
router.get("/", postController.getAllPosts);
router.get("/flagged", postController.getFlaggedPosts);
router.put("/approve/:id", postController.approvePost); // for admin

module.exports = router;
