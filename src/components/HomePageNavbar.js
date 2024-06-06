import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function HomepageNavbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#37517e' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white" to="/home">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-white" activeClassName="active" aria-current="page" to="/home">Home</NavLink>
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
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/enquiry">Enquiry</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Roles
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/admin-dashboard">Admin</Link></li>
                                <li><Link className="dropdown-item" to="/accounts-head-dashboard">Account Head</Link></li>
                                <li><Link className="dropdown-item" to="/customer">Customer</Link></li>
                                <li><Link className="dropdown-item" to="/LR-dashboard">Loan Representative</Link></li>
                                <li><Link className="dropdown-item" to="/LSO-dashboard">Loan Sanction Officer</Link></li>
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
