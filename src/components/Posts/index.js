import Post from "./Post";
import './style.scss'

export default function Posts({ posts, onPostLike, onPostDislike }) {
    let totalLike = 0;
    let totalDislike = 0;

    posts.forEach((post) => {
        totalLike += post.like;
        totalDislike += post.dislike;
    })

    return (
        <main className="post-list">
            {
                posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            {...post}
                            onPostLike={onPostLike}
                            onPostDislike={onPostDislike}
                        />
                    )
                })
            }

            <div>Total likes {totalLike} | Total dislike {totalDislike}</div>
        </main>
    )
}