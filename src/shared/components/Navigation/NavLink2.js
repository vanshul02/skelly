import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLink2.css';

const NavLink2 = () => {
    return <ul className="nav-links-icons">
        <li>
            <NavLink to="/" exact> <i className="uil uil-search"></i> </NavLink>
        </li>
        < li>
            <NavLink to="/" exact> <i className="uil uil-shopping-cart"></i> </NavLink>
        </li>
        <li>
            <NavLink to="/" exact> <i className="uil uil-user"></i> </NavLink>
        </li>
    </ul>
};

export default NavLink2;