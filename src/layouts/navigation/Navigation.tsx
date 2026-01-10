import { Component } from "react";
import CookBookLogo from "../../assets/icons/CookBookLogo"
import { NavLink } from "react-router-dom";

import './Navigation.scss';

const navData = [
    { title: 'home', path: '/'},
    { title: 'recipe', path: '/recipe'},
    { title: 'recipes', path: '/recipes'},
    { title: 'errorpage', path: '*'},

];

class Navigation extends Component {
    render() {
        const navOptions = navData.map(item => (
            <li key={item.title} className="nav_item">
                <NavLink to={item.path}>{item.title}</NavLink>
            </li>
        ))
        return (
            <div className="nav">
                <CookBookLogo/>
                <ul className="nav__list">
                    {navOptions}
                </ul>
            </div>
        ); 
    }
};

export default Navigation;