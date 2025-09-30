import { useState } from "react";
import Post from "./Post";
import { v4 as uuidv4 } from 'uuid';

export default function Posts() {
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
    const handleAddPost = () => {
        const updatePost = [...posts];
        updatePost.push({
            id: uuidv4(),
            title: "New post",
            like: 10,
            dislike: 12
        });

        console.log(updatePost);
        setPost(updatePost);
    }

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


    let totalLike = 0;
    let totalDislike = 0;

    posts.forEach((post) => {
        totalLike += post.like;
        totalDislike += post.dislike;
    })


    return (
        <main>
            <h2>List of posts</h2>
            {
                posts.map((post, index) => {
                    return (
                        <Post
                            id={post.id}
                            key={index}
                            title={post.title}
                            like={post.like}
                            dislike={post.dislike}
                            onPostLike={handlePostLike}
                            onPostDislike={handlePostDisLike}
                        />
                    )
                })
            }

            <div>Total likes {totalLike} | Total dislike {totalDislike}</div>
        </main>
    )
}