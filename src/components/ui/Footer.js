import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="container">
                    <span className="alignX">
                        <h2>Nissan.</h2>
                        <h3 className="subtitle">Innovation that excites.</h3>
                    </span>
                    <div className="row">
                        <ul className="col-sm col-md-3">
                            <li><h3>COTIZACIÓN DE VEHÍCULOS</h3></li>
                            <li><Link to="/"><i className="material-icons">help</i> Información Legal</Link></li>
                        </ul>
                        <ul className="col-sm col-md-3">
                            <li><h3>RALITOR S.A.</h3></li>
                            <li><Link to={'//www.nissan.com.uy/'} target="_blank">nissan.com.uy</Link></li>
                            <li><Link to="/">Políticas de Cookies</Link></li>
                        </ul>
                        <ul className="col-sm col-md-3">
                            <li><h3>AYUDA AL CLIENTE</h3></li>
                            <li><Link to="/">Políticas de Privacidad</Link></li>
                        </ul>
                        <ul className="col-sm col-md-3">
                            <li><h3>NISSAN SOCIAL</h3></li>
                            <li>
                                <ul className="footer__social-media alignX">
                                    <li><Link to={'//www.facebook.com/'} target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                    <li><Link to={'//www.instagram.com/'} target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                    <li><Link to={'//www.tweeter.com/'} target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                    <li><Link to={'//www.youtube.com/'} target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <div className="container">
                    <p>2020 SIMPLICAR. Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}
