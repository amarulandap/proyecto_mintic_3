/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {Link} from 'react-router-dom'




function NavbarComponent(props) {

    let title = props.title;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="/login" className="nav-link">Iniciar Sesion</Link>
                        <Link to="/register" className="nav-link">Registrarse</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;