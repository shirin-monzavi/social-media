import Post from "./Post";
import './style.scss'
import { useSelector } from "react-redux";

export default function Posts() {
    let totalLike = 0;
    let totalDislike = 0;
    const posts = useSelector((state) => {
        return state.posts;
    });

    const { allowLike, allowDislike } = useSelector((state) => {
        console.log('d', state.settings)
        return state.settings;
    })

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
            {(allowLike || allowDislike) && (
                <div className="total-rate">
                    {allowLike && (<>  Total likes {totalLike}</>)}

                    {allowLike && allowDislike && <> | </>}

                    {allowDislike && (<>Total dislike {totalDislike}</>)}
                </div>
            )}

        </main>
    )
}