import { getCategory, getStatus } from '../../../includes/variable';
import './styles.scss'
export default function Post({ id, title, description, picture, promote, category, like, dislike, onPostLike, onPostDislike, status }) {

    const handleLike = () => {
        onPostLike(id)
    }

    const handleDisLike = () => {
        onPostDislike(id)
    }
    const promoteStyle = promote ? 'promote-yes' : 'promote-no';
    const displikeStyle = dislike >= 5 ? 'too-many-dislike' : '';

    return (
        <div className='post-component'>
            <h3 >{title}</h3>
            <img src={picture} alt={title} width={100} />
            <p className='post-text'>{description}</p>
            <p className='p-p'>Category: {getCategory(category)}</p>
            <p className={promoteStyle}>Promote: <strong> {promote ? 'Yes' : 'No'}</strong></p>
            <p className='p-a'>Status: {getStatus(status)}</p>
            <p>Like Counter {like} <button type="button" onClick={handleLike}>Like</button></p>
            <p className={displikeStyle}
                style={{ fontSize: 10 + dislike }}

            >DisLike Counter {dislike} <button type="button" onClick={handleDisLike}>DisLike</button></p>
        </div>
    )
}