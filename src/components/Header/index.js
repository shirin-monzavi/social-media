import appName from './../../includes/variable.js'
import { PiGithubLogoFill } from 'react-icons/pi';

export default function Header() {
    return (
        <header>
            <PiGithubLogoFill />
            <h1>{appName}</h1>
        </header>
    );
}