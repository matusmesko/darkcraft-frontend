import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "../wrapper/Wrapper"
import Link from "next/link"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Wrapper>
                <div className={styles.container}>
                    <div className={styles.upperContainer}>
                        <div className={styles.textContainer}>
                            <img src="/darkcraftText.png" alt="darkcraft"/>
                            <p>Pro více informací se připoj na náš discord kde najdeš všechny novinky, nábory, eventy a mnoho dalšího. </p>
                            <div className={styles.linkContainer}>
                                <Link href={"/hlasovani"}>HLASOVÁNÍ</Link>
                                <Link href={"/pravidla"}>PRAVIDLA</Link>
                            </div>
                        </div>

                        <div className={styles.imgContainer}>
                            <img src="/mc.png" alt="img"/>
                        </div>
                    </div>

                    <div className={styles.authorContainer}>
                        <p>©{currentYear} <span>DarkCraft.cz</span> / Všechna práva vyhrazena / Design & created by <a href="http://matusmesko.xyz/" target={"_blank"}>M3SK1</a></p>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;