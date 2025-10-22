import appName from './../../includes/variable.js'
import { PiGithubLogoFill } from 'react-icons/pi';
import './style.scss'
export default function Header() {
    return (
        <header className='main'>
            <PiGithubLogoFill />
            <h1>{appName}</h1>
        </header>
    );
}