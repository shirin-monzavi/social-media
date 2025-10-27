
import './style.scss';
import { useSelector } from 'react-redux';

export default function Settings() {
    const settings = useSelector((state) => {
        return state.settings;
    });

    const handleAllowLikesClick = () => {
        console.log('Allow likes')
    }
    const handleAllowDisLikesClick = () => {
        console.log('Allow Dislikes')
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