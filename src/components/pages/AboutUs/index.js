import { NavLink, Outlet } from "react-router-dom";
import PageContainer from "../../PageContainer";
import './style.scss';

export default function AboutUs() {

    return (
        <PageContainer title='About us' className='about-us-page'>
            <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Outlet />
            </article>
            <aside>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/about-us/mission'>Our Mission</NavLink>
                <NavLink to='/about-us/privacy'>Privacy Policy</NavLink>
            </aside>
        </PageContainer>
    )
}