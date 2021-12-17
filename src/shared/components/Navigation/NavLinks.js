import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact> Men </NavLink>
        </li>
        < li>
            <NavLink to="/" exact> Women </NavLink>
        </li>
        <li>
            <NavLink to="/" exact> Kids </NavLink>
        </li>
    </ul>
};

export default NavLinks;