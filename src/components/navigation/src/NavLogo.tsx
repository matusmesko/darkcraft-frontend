import React from 'react';
import styles from "../page.module.scss"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const NavLogo = () => {
    return (
        <div className={styles.navLogoContainer}>
            <Link href={"/"} className={styles.navLogoLink}>
                <Image src="/darkcraftLogo.png" alt="me" fill sizes={"54px; unset"} className={styles.navLogo}/>
            </Link>

            <Link href={"https://www.instagram.com/darkcraft.official/"}>
                <FaInstagram size={25}/>
            </Link>

            <Link href={"https://discord.com/invite/QFZ7KG2Ht5"}>
                <FaDiscord size={25}/>
            </Link>

            <Link href={"https://www.tiktok.com/@darkcraft.official"}>
                <FaTiktok size={25}/>
            </Link>
        </div>
    );
};

export default NavLogo;