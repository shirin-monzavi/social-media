import { getCategory,getStatus } from '../../../includes/variable';

export default function Post({ id, title, description, picture, promote, category, like, dislike, onPostLike, onPostDislike, status }) {

    const handleLike = () => {
        onPostLike(id)
    }

    const handleDisLike = () => {
        onPostDislike(id)
    }

    return (
        <>
            <h3>{title}</h3>
            <img src={picture} alt={title} width={100} />
            <p>{description}</p>
            <p>Category: {getCategory(category)}</p>
            <p>Promote: {promote ? 'Yes' : 'No'}</p>
            <p>Status: {getStatus(status)}</p>
            <p>Like Counter {like} <button type="button" onClick={handleLike}>Like</button></p>
            <p>DisLike Counter {dislike} <button type="button" onClick={handleDisLike}>DisLike</button></p>
            <hr />
        </>
    )
}