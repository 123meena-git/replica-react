import React from 'react'
import './Footer.css'
import Reacttwitter from './asset/twitter.svg';
import Reactfacebook from './asset/facebook.svg';

function Footer () {
    return (
        <Footer className="Container" bgcolor="blue">
            <ul>
                <li>
                    <a href="/">About Us</a>
                    </li>
                <li>
                    <a href="/">Contact</a>
                    </li>
                <li>
                    <a href="/Twitter"><img src={Reacttwitter} alt="React twitter" />Twitter</a>
                </li>
                <li>
                    <a href="/facebook"><img src={Reactfacebook} alt="React facebook" />facebook</a>
                </li>
            </ul>
        </Footer>
    )
}
export default Footer;