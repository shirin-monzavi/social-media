export default function Post({ id, title, like, dislike, onPostLike, onPostDislike }) {


    const handleLike = () => {
        onPostLike(id)
    }

    const handleDisLike = () => {
        onPostDislike(id)
    }

    return (
        <>
            <h3>{title}</h3>

            <p>Like Counter {like} <button type="button" onClick={handleLike}>Like</button></p>

            <p>DisLike Counter {dislike} <button type="button" onClick={handleDisLike}>DisLike</button></p>
            <hr />
        </>

    )
}