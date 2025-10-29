
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllowLike, toggleAllowDisLike } from '../../redux/settingsSlide';

export default function Settings() {
    const dispatch = useDispatch();

    const settings = useSelector((state) => {
        return state.settings;
    });

    const handleAllowLikesClick = () => {
        dispatch(toggleAllowLike())
    }
    const handleAllowDisLikesClick = () => {
        dispatch(toggleAllowDisLike())
    }

    return (

        <div className='settings-component'>
            <h1>Settings</h1>

            <div className='field' >
                <label>
                    <input type='checkbox' checked={settings.allowLike}
                        onChange={handleAllowLikesClick} />
                    Allow Likes
                </label>

                <label>
                    <input type='checkbox' checked={settings.allowDislike}
                        onChange={handleAllowDisLikesClick} />
                    Allow DisLikes
                </label>
            </div>
        </div>
    )
}