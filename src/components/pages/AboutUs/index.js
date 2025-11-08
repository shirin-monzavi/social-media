import { NavLink, Outlet } from "react-router-dom";
import PageContainer from "../../PageContainer";
import './style.scss';

export default function AboutUs() {

    return (
        <PageContainer title='About us' className='about-us-page'>
            <article>
                <Outlet />
            </article>
            <aside>
                <NavLink to='/about-us' end>About Us</NavLink>
                <NavLink to='/about-us/mission'>Our Mission</NavLink>
                <NavLink to='/about-us/privacy'>Privacy Policy</NavLink>
            </aside>
        </PageContainer>
    )
}