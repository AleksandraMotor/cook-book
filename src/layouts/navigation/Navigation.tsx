import { NavLink } from 'react-router-dom';

import './Navigation.scss';
import Logo from '../../components/logo/Logo';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Logo/>
            <ul>
                <NavLink className='navigation__link' to={'/search'}>search</NavLink>
                <NavLink className='navigation__link' to={'/settings'}>settings</NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;