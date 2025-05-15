import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/postSlice";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const useFetchPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_URL);
        const postsWithLikes = response.data.slice(0, 10).map(post => ({
          ...post,
          likes: 0,
          comments: []
        }));
        dispatch(setPosts(postsWithLikes));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [dispatch]);
};

export default useFetchPosts;
