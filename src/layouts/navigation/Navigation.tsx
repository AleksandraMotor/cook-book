import { NavLink } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import search_icon from '../../assets/icons/search_icon.png';
import settings_icon from '../../assets/icons/settings-icon.png';

import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Logo/>
            <ul className='navigation__menu-list'>
                <NavLink className='navigation__link' to={'/search'}>
                    <img src={search_icon} alt='Go to Search Page'/>
                </NavLink>
                <NavLink className='navigation__link' to={'/settings'}>
                    <img src={settings_icon} alt='Go to Settings Page'/>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;