import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from './components/Forms'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Playground from './playground/playground';

export default function App() {
  const [posts, setPost] = useState([]);

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

  const handleAddPost = (title,description,promote,picture,category,status) => {
    const updatedPost = [...posts];

    updatedPost.push({
      id: uuidv4(),
      title,
      description,
      promote,
      picture,
      category,
      like: 0,
      dislike: 0,
      status
    });

    setPost(updatedPost);
  }

  return (
    <>
    <Playground />
      {/* <Header />
      <Posts posts={posts}
        onPostLike={handlePostLike}
        onPostDislike={handlePostDisLike}
      />
      <Form onHandleAddPost={handleAddPost} />
      <Footer /> */}
    </>
  );
}
