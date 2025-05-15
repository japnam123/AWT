import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { likePost, addComment } from "../redux/postSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="font-bold text-lg">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>

      <div className="flex items-center mt-2">
        <button
          onClick={() => dispatch(likePost(post.id))}
          className="text-blue-500 mr-2"
        >
          👍 {post.likes}
        </button>
        <input
          type="text"
          placeholder="Write a comment..."
          className="border p-1 rounded"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={() => {
            if (comment.trim()) {
              dispatch(addComment({ postId: post.id, comment }));
              setComment("");
            }
          }}
          className="bg-blue-500 text-white px-2 ml-2 rounded"
        >
          Comment
        </button>
      </div>

      <div className="mt-2">
        {post.comments.map((c, i) => (
          <p key={i} className="text-sm text-gray-600">💬 {c}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
