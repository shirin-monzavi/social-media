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
            <div className='description'>
                <img src={picture} alt={title} />
                <span className='post-text'>{description}</span>
            </div>
            <div className='info'>
                <div>Category: <strong>{getCategory(category)}</strong></div>
                <div>Status: <strong>{getStatus(status)}</strong></div>
                <div className={promoteStyle}>Promote: <strong> {promote ? 'Yes' : 'No'}</strong></div>
            </div>
            <div>
                <button title='like' type="button" className='like' onClick={handleLike}>{like}</button>
                <button className='dislike' type="button" title='dislike' onClick={handleDisLike}>{dislike}</button>
            </div>
        </div>
    )
}