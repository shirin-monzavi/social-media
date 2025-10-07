import Post from "./Post";

export default function Posts({posts,onPostLike,onPostDislike}) {
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