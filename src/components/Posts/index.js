import Post from "./Post";
import './style.scss'

export default function Posts({ onPostLike, onPostDislike }) {
    let totalLike = 0;
    let totalDislike = 0;
    const posts = []; //TODO
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
                            onPostLike={onPostLike}
                            onPostDislike={onPostDislike}
                        />
                    )
                })
            }

            <div className="total-rate">Total likes {totalLike} | Total dislike {totalDislike}</div>
        </main>
    )
}