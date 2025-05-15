const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      message: post.isFlagged
        ? "Post created but flagged for moderation."
        : "Post created successfully.",
      post,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({ isFlagged: false });
  res.json(posts);
};

exports.getFlaggedPosts = async (req, res) => {
  const posts = await Post.find({ isFlagged: true });
  res.json(posts);
};

exports.approvePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, { isFlagged: false }, { new: true });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json({ message: "Post approved", post });
};
