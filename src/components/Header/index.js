import appName from './../../includes/variable.js'
import { FaBloggerB } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <FaBloggerB />
            <h1>{appName}</h1>
        </header>
    );
}