import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <span className="align-horizontal">
                    <h1>Nissan</h1>. 
                    <h2>Innovation that excites</h2>.
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
                            <ul className="align-horizontal">
                                <li><Link to={'//www.facebook.com/'} target="_blank">F</Link></li>
                                <li><Link to={'//www.instagram.com/'} target="_blank">I</Link></li>
                                <li><Link to={'//www.tweeter.com/'} target="_blank">T</Link></li>
                                <li><Link to={'//www.youtube.com/'} target="_blank">Y</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="coyright">
                <div className="container">
                    <p>2020 SIMPLICAR. Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}
