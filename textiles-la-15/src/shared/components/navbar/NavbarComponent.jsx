import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function NavbarComponent(props) {
    let title = props.title;
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/"  className="nav-link active" aria-current="page" >Home</Link>
                            <Link to="/login" className="nav-link" >Login</Link>
                            <Link to="/register" className="nav-link" >Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )

}

export default NavbarComponent;