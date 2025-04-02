import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/Logo.png';

import './Logo.scss';

const Logo = () => {
    return (
        <NavLink to={'/'}>
            <img src={logo} alt='CookBook Logo'/>
        </NavLink>
    );
};

export default Logo;