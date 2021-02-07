import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import logo from '../media/ps5.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/"> <img className="logo" src={logo} alt="logo" /> </Link>
            <div className="nav-items">
                <NavLink to="about">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="profile">Profile</NavLink>
            </div>
            <div className="btn">
                <input className="signin-btn" type="button" value="Sign in" />
            </div>
        </div>
    )
}

export default NavBar;
