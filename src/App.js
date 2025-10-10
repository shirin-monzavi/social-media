import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from './components/Forms'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [posts, setPost] = useState([
    {
      id: uuidv4(),
      title: "What is this",
      like: 10,
      dislike: 5
    },
    {
      id: uuidv4(),
      title: "How to do it",
      like: 10,
      dislike: 7
    },
    {
      id: uuidv4(),
      title: "Where to find it",
      like: 10,
      dislike: 7
    },
  ]);

  const handlePostLike = (id) => {
    const updatedPost = [...posts];

    posts.forEach((post) => {
      if (post.id === id) {
        post.like += 1;
      }
    })
    setPost(updatedPost);
  }

  const handlePostDisLike = (id) => {
    const updatedPost = [...posts];

    posts.forEach((post) => {
      if (post.id === id) {
        post.dislike += 1;
      }
    })
    setPost(updatedPost);
  }

  const handleAddPost = (title) => {
    const updatedPost = [...posts];

    updatedPost.push({
      id: uuidv4(),
      title:title,
      like: 10,
      dislike: 7

    });

    setPost(updatedPost);
  }

  return (
    <>
      <Header />
      <Posts posts={posts}
        onPostLike={handlePostLike}
        onPostDislike={handlePostDisLike}

      />
      <Form onHandleAddPost={handleAddPost} />
      <Footer />
    </>
  );
}
