/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";



function NavbarComponent(props) {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {user,isAuthenticated} = useAuth0();

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
                        {/*<Link to="/login" className="nav-link">Iniciar Sesion</Link>*/}
                        {isAuthenticated ? null : <a className="nav-link" onClick={() => loginWithRedirect()}>Iniciar sesion</a>}
                        <Link to="/register" className="nav-link" >Registrarse</Link>
                       {isAuthenticated ? <a className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesion</a> : null}
                    </div>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">{isAuthenticated ? user.name: "user"}</button></form>
            </div>
        </nav>
    );
}

export default NavbarComponent;