
import './style.scss';
import { useSelector } from 'react-redux';

export default function Settings() {
    const setting1 = useSelector((state) => {
        console.log('store', state);

        return state.settings;
    });

    console.log('h', setting1)

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
                    <input type='checkbox' checked={null}
                        onChange={handleAllowLikesClick} />
                    Allow Likes
                </label>

                <label>
                    <input type='checkbox' checked={null}
                        onChange={handleAllowDisLikesClick} />
                    Allow DisLikes
                </label>
            </div>
        </div>
    )
}