import React from 'react'
import './Footer.css'
import Twitter from "./asset/Twitter.svg"
import Facebook from './asset/Facebook.svg';

function Footer () {
    return (
        <Footer className="Container" smcolor="blue">
            <ul>
                <li>
                    <a href="/">About Us</a>
                    </li>
                <li>
                    <a href="/">Contact</a>
                    </li>
                <li>
                    <a href="/Twitter"><img src={Twitter} alt="Twitter" />Twitter</a>
                </li>
                <li>
                    <a href="/facebook"><img src={Facebook} alt="Facebook" />facebook</a>
                </li>
            </ul>
        </Footer>
    )
}
export default Footer;