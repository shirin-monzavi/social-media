import { getCategory, getStatus } from '../../../includes/variable';
import './styles.scss'
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, disLikePost } from '../../../redux/postSlice';
import { Link } from 'react-router-dom';

export default function Post({ id, title, description, picture, promote, category, like, dislike, status }) {
    const dispatch = useDispatch();

    const { allowLike, allowDislike } = useSelector((state) => {
        return state.settings
    })

    const handleLike = (e) => {
        e.preventDefault();
        dispatch(likePost(id))
    }

    const handleDisLike = (e) => {
        e.preventDefault();
        dispatch(disLikePost(id))
    }

    const promoteStyle = promote ? 'promote-yes' : 'promote-no';
    let rateClassName = 'rate';
    if (!allowLike || !allowDislike) {
        rateClassName += ' rate-single-button'
    }

    return (
        <>
            <Link className='post-component ' to={'/posts/' + id}>
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
                {(allowLike || allowDislike) && <div className={rateClassName}>
                    {allowLike && (<button title='like' type="button" className='like' onClick={handleLike}> <AiFillLike /> {like}</button>)}
                    {allowDislike && (<button className='dislike' type="button" title='dislike' onClick={handleDisLike}> <AiFillDislike /> {dislike}</button>)}
                </div>}

            </Link>
        </>

    )
}