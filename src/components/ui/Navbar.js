import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo01" 
                aria-controls="navbarTogglerDemo01" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            to="/store">
                                VEHÍCULOS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            to={"//www.nissan.com.uy/"} 
                            target="_blank" 
                            rel="noopener noreferrer">
                                DESCUBRÍ NISSAN
                        </NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <i className="material-icons">search</i>
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" />
                </form>
            </div>
        </nav>
    )
}
