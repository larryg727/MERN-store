import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../images/companyLogo.png';

const Navbar = props => {
    return (
        <div className="navbar">
            <div className="logoContainer">
                <img src={CompanyLogo} alt="companyLogo" />
            </div>
            <div className="navLinks">
                <div className="hvr-underline-from-center">
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                </div>
                <div className="hvr-underline-from-center">
                    <NavLink to="/products" activeClassName="active">
                        Products
                    </NavLink>
                </div>
                {props.isAdmin ? (
                    <div className="hvr-underline-from-center">
                        <NavLink to="/admin" activeClassName="active">
                            Admin
                        </NavLink>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
