import { Link } from 'react-router-dom';
import './style.scss';

export default function MainMenu() {
    return (
        <nav className='main'>
            <Link to='/'></Link>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/preferences">Preferences</Link>
            <Link to="/about-us">About Us</Link>
        </nav>
    )
}