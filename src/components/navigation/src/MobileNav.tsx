import React, {useState} from 'react';
import styles from "../page.module.scss"
import Link from "next/link";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copyText, setCopyText] = useState<string>("IP Adresa")
    const handleClick = () => {
        navigator.clipboard.writeText("mc.darkcraft.cz")
        setCopyText("Zkopírováno!")
    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
            <div className={styles.mobileNav}>
                <input
                    className={styles.menuIcon}
                    type="checkbox"
                    id="menu-icon"
                    name="menu-icon"
                    checked={isOpen}
                    onChange={toggleMenu}
                />
                <label htmlFor="menu-icon"></label>
                <nav className={styles.nav}>
                    <ul className={`pt-5 ${isOpen ? 'open' : ''}`}>
                        <li onClick={toggleMenu}><Link href={"/"}>Domů</Link></li>
                        <li onClick={toggleMenu}><Link href={"/hlasovani"}>Hlasování</Link></li>
                        <li onClick={toggleMenu}><Link href={"/adminteam"}>Admin Team</Link></li>
                        <li onClick={toggleMenu}><Link href={"/pravidla"}>Pravidla</Link></li>
                        <li><Link href={"https://mapa.darkcraft.cz/"}>Dynmapa</Link></li>
                        <li><Link href={"https://www.instagram.com/darkcraft.official/"}>Instagram</Link></li>
                        <li><Link href={"https://discord.com/invite/QFZ7KG2Ht5"}>Discord</Link></li>
                        <li><Link href={"https://www.tiktok.com/@darkcraft.official"}>Tiktok</Link></li>
                        <li><button onClick={handleClick}
                                    onMouseLeave={() => setTimeout(() => setCopyText("IP Adresa"),500)} data-tooltip={copyText}
                                    className={styles.button}
                        >{copyText}</button></li>
                        {/*<li><a href="#">Work</a></li>*/}
                        {/*<li><a href="#">Studio</a></li>*/}
                        {/*<li><a href="#">News</a></li>*/}
                        {/*<li><a href="#">Contact</a></li>*/}
                    </ul>
                </nav>
            </div>

    );
};

export default MobileNav;