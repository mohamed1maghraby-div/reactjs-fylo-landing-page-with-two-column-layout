import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <header>
            <nav className="navbar" role="navigation">
                <div className="container">
                <div className="navbar-header">
                    <Link className='navbar-brand' to='/'>
                        <img src="images/logo.svg" alt="logo"/>
                    </Link>
                </div>
                    <div className="collapse navbar-collapse navbar-right" id="ournavbar">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to='/'>Features</Link>
                                </li>
                            <li>
                            <Link to='/'>Team</Link></li>
                            <li>
                            <Link to='/'>Signin</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;