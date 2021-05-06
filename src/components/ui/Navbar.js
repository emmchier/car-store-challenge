import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/brand-logo.svg';

export const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={ 
            scrollPosition > 0 
            ? 'navbar fixed-top navbar-expand-lg navbar-light bg-light navbar fixed-top navbar-expand-lg showBackground main-elevation' 
            : 'navbar fixed-top navbar-expand-lg navbar-light bg-light' }>
            <Link 
                className={ scrollPosition > 0 ? 'navbar-brand resizeLogo' : 'navbar-brand' } 
                to="/">
                <img src={ Logo } alt={ 'show Nissan brand logo' }/>
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo01" 
                aria-controls="navbarTogglerDemo01" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">   
                    <i className="material-icons burguer-icon">menu</i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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
                <div className="navbar__search-bar">
                    <form className="form-inline my-2 my-lg-0">
                        <i className="material-icons reverseX">search</i>
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="BUSCAR POR MODELO O VEHÍCULO" 
                            aria-label="Search"
                            autoComplete="off" />
                    </form>
                </div>
            </div>
        </nav>
    )
}
