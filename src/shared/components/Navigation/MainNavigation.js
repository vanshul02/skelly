import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop/Backdrop';
import './MainNavigation.css';
import NavLink2 from './NavLink2';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>

      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h2 className="main-navigation__title">
          <Link to="/"><i className="uil uil-files-landscapes" style={{ fontSize: '36px' }}></i> <span style={{ color: 'gold' }}>E-</span>Shop</Link>
        </h2>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <nav className="main-navigation__header-nav">
          <NavLink2 />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
