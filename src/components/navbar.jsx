// make the css file import the same as the one in the snippet

import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body personalNavbar" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand">Cris Nuñez</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/services">Servicios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Eventos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Admin</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
    );

}
export default Navbar;