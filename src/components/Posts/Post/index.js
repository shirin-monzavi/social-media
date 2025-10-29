import { getCategory, getStatus } from '../../../includes/variable';
import './styles.scss'
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function Post({ id, title, description, picture, promote, category, like, dislike, onPostLike, onPostDislike, status }) {
    const { allowLike, allowDislike } = useSelector((state) => {
        return state.settings
    })

    const handleLike = () => {
        onPostLike(id)
    }

    const handleDisLike = () => {
        onPostDislike(id)
    }

    const promoteStyle = promote ? 'promote-yes' : 'promote-no';

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
            <div className='rate'>
                {allowLike && (<button title='like' type="button" className='like' onClick={handleLike}> <AiFillLike /> {like}</button>)}
                {allowDislike && (<button className='dislike' type="button" title='dislike' onClick={handleDisLike}> <AiFillDislike /> {dislike}</button>)}

            </div>
        </div>
    )
}