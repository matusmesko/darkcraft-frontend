'use client'
import React, {useState} from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import Link from "next/link"
import Image from "next/image"
import NavLogo from "@/components/navigation/src/NavLogo";
import MobileNav from "@/components/navigation/src/MobileNav";

const Navigation = () => {
    const [copyText, setCopyText] = useState<string>("IP Adresa")
    const handleClick = () => {
        navigator.clipboard.writeText("mc.darkcraft.cz")
        setCopyText("Zkopírováno!")
    }

    return (
        <nav className={styles.navigation}>
            <Wrapper className={styles.navigationWrapper}>
                <NavLogo/>

                <div className={styles.navLinkContainer}>
                    <Link href={"/hlasovani"}>Hlasování</Link>
                    <Link href={"/adminteam"}>Admin Team</Link>
                    <Link href={"/pravidla"}>Pravidla</Link>
                    <Link href={"https://mapa.darkcraft.cz/"}>Dynmapa</Link>
                    <button onClick={handleClick}
                            onMouseLeave={() => setTimeout(() => setCopyText("IP Adresa"),500)} data-tooltip={copyText}
                            className={styles.button}
                    >{copyText}</button>
                </div>
                <MobileNav/>
            </Wrapper>
        </nav>

    );
};

export default Navigation;