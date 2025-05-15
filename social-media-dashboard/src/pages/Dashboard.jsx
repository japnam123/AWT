import React from "react";
import { useSelector } from "react-redux";
import useFetchPosts from "../hooks/useFetchPosts";
import Post from "../components/Post";

const Dashboard = () => {
  useFetchPosts();
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">📢 Social Media Feed</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Dashboard;
