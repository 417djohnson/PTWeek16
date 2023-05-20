import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/'>
                    Life Essentials
                </Link>
                <button 
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                <span className='navbar-toggler-icon' />
                </button>
                <div className='collape navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink exact to='/therapists' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Therapists
                            </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink exact to='/members/bonnie' className="dropdown-item">Bonnie</NavLink>
                                <NavLink exact to='/members/buster' className="dropdown-item">Buster</NavLink>
                                <NavLink exact to='/members/ella' className="dropdown-item">Ella</NavLink>
                                </div>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/create' className='nav-link'>Apply</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
