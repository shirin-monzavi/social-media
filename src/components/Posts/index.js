import Post from "./Post";
import './style.scss'
import { useSelector } from "react-redux";

export default function Posts() {
    let totalLike = 0;
    let totalDislike = 0;
    const posts = useSelector((state) => {
        return state.posts;
    });

    posts.forEach((post) => {
        totalLike += post.like;
        totalDislike += post.dislike;
    })

    return (
        <main className="post-list">
            {
                posts.map((post, index) => {
                    return (
                        <Post key={index} {...post} />
                    )
                })
            }

            <div className="total-rate">Total likes {totalLike} | Total dislike {totalDislike}</div>
        </main>
    )
}