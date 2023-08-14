import React from 'react';
import sty from '../styles/Footer.module.css';
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import LOGO from '../components/images/logo.svg';
import styles from "../styles/Header.module.css";

function Footer(props) {
    return (
        <section className={sty.footer}>
            <div className={sty.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt='Stuff'/>
                </Link>
            </div>
            <div className={sty.rights}>
                Developed by <b>Taras Leuta</b>
            </div>

            <div className={sty.socials}>
                <a href='https://instagram.com'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
                </a>
                <a href='https://facebook.com'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
                </a>
                <a href='https://youtube.com'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
                </a>
            </div>
        </section>
    );
}

export default Footer;