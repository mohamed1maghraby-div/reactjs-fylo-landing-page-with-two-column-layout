import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div class="container">
                <div className='row'>
                    <div className='col-lg-12'>
                        <img src="images/logo.svg" alt="logo"/>
                    </div>
                </div>
                <div class="row">
                <div class="col-lg-3">
                    <p>Phone: +1-543-123-4567</p>
                    <p>example@fylo.com</p>
                </div>
                <div class="col-lg-3">
                    <ul>
                    <li><Link to='/'>About Us</Link></li>
                    <li><Link to='/'>Jobs</Link></li>
                    <li><Link to='/'>Press</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <ul>
                    <li><Link to='/'>Contact Us</Link></li>
                    <li><Link to='/'>Terms</Link></li>
                    <li><Link to='/'>Privacy</Link></li>
                    </ul>
                </div>
                <div class="col-lg-3"><span>icon</span><span>icon</span><span>icon</span></div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;