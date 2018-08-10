import React from 'react';
import {NavLink} from 'react-router-dom';
import '../components/nav.css';

const Nav = () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink activeClassName="active selected" exact to="/" className="nav-link">Welcome</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active selected" to="/our-macarons" className="nav-link">Our Macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active selected" to="/gift_parties" className="nav-link">Gift And Parties</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active selected" to="/contact" className="nav-link">Contact Us</NavLink>
            </li>
        </ul>
    );
}

export default Nav;