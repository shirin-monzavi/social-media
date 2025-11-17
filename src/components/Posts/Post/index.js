import { getCategory, getStatus } from '../../../includes/variable';
import './styles.scss'
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, disLikePost } from '../../../redux/postSlice';
import { Link } from 'react-router-dom';
import * as database from '../../../database';

export default function Post({ id, title, description, picture, promote, category, like, dislike, status }) {
    const dispatch = useDispatch();

    const { allowLike, allowDislike } = useSelector((state) => {
        return state.settings
    })

    const handleLike = async (e) => {
        e.preventDefault();
        dispatch(likePost(id))
        const data = { like: like + 1 };
        var result = await database.update(id, data);
        if (!result) {
            alert("Failed to update like. Please refresh the page.")
        }
    }

    const handleDisLike = async (e) => {
        e.preventDefault();
        dispatch(disLikePost(id));
        const data = { dislike: dislike + 1 };
        var result = await database.update(id, data);
        if (!result) {
            alert("Failed to update dislike. Please refresh the page.")
        }
    }

    const hadnleRemove = async (event) => {
        event.preventDefault();
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
                <button onClick={hadnleRemove}>Remove </button>
            </Link>
        </>

    )
}