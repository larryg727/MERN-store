import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../images/companyLogo.png';
import AuthContext from '../AuthContext';

const Navbar = props => {
    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('isAdmin');
        window.location.reload();
        //TODO: reload history to take to login or home route.
    };

    return (
        <AuthContext.Consumer>
            {auth => {
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
                            {auth.isAuthenticated ? (
                                <div className="hvr-underline-from-center" onClick={logout}>
                                    Logout
                                </div>
                            ) : (
                                <React.Fragment>
                                    <div className="hvr-underline-from-center">
                                        <NavLink to="/register" activeClassName="active">
                                            Register
                                        </NavLink>
                                    </div>
                                    <div className="hvr-underline-from-center">
                                        <NavLink to="/login" activeClassName="active">
                                            Login
                                        </NavLink>
                                    </div>
                                </React.Fragment>
                            )}
                            {auth.isAdmin ? (
                                <div className="hvr-underline-from-center">
                                    <NavLink to="/admin" activeClassName="active">
                                        Admin
                                    </NavLink>
                                </div>
                            ) : null}
                        </div>
                    </div>
                );
            }}
        </AuthContext.Consumer>
    );
};
export default Navbar;
