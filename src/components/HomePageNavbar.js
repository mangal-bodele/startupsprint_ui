import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomepageNavbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#37517e' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-white" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/signup">SignUp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/emi-calculator">EMI Calculator</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/verify">Verified Customer</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle text-white" activeClassName="active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Roles
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/admin-dashboard">Admin</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/accounts-head-dashboard">Account Head</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/customer">Customer</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/LR-dashboard">Loan Representative</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/LSO-dashboard">Loan Sanction Officer</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled text-white" aria-disabled="true" to="#">Disabled</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default HomepageNavbar;