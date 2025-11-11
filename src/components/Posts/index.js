import Post from "./Post";
import './style.scss'
import { useSelector } from "react-redux";

export default function Posts({ showOnlyPromoted }) {
    let totalLike = 0;
    let totalDislike = 0;
    let posts = useSelector((state) => {
        return state.posts;
    });

    const { allowLike, allowDislike } = useSelector((state) => {
        return state.settings;
    })

    posts.forEach((post) => {
        totalLike += post.like;
        totalDislike += post.dislike;
    })

    if (showOnlyPromoted) {
        posts = posts.filter((p => p.promote))
    }

    if (posts.length === 0) {
        return (<>
            <div>No post found.</div>
        </>);
    }

    return (
        <>
            <div className="post-list full-width">
                {
                    posts.map((post, index) => {
                        return (
                            <Post key={index} {...post} />
                        )
                    })
                }
                {(allowLike || allowDislike) && !showOnlyPromoted && (
                    <div className="total-rate">
                        {allowLike && (<>  Total likes {totalLike}</>)}

                        {allowLike && allowDislike && <> | </>}

                        {allowDislike && (<>Total dislike {totalDislike}</>)}
                    </div>
                )}

            </div>

        </>
    )
}