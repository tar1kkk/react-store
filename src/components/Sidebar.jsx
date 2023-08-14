import React from 'react';
import styles from '../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";

function Sidebar(props) {
    console.log(123);
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to={`/categories/${1}`}></NavLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.footer}>
                <a href='/help' target='_blank' className={styles.link}>
                    Help
                </a>
                <a href='/terms' style={{textDecoration : 'underline'}} target='_blank' className={styles.link}>
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
}

export default Sidebar;