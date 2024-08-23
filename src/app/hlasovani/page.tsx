'use client'
import React, {useState} from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import { FiLink } from "react-icons/fi";

const Page = () => {
    const[userName, setUsername] = useState("");
    return (
        <section className={styles.hlasovani}>
            <Wrapper>
                <div className={styles.container}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputContainer}>
                            <img src={"https://render.skinmc.net/3d.php?user=" + userName + "&vr=-10&hr0&hrh=25&aa=&headOnly=true&ratio=50"} alt={"img"}/>
                            <input type="text" placeholder={"Minecraft Nick"} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                       <div className={styles.buttonContainer}>
                           <button type={"submit"} onClick={() => window.open("https://minecraftservery.eu/server/darkcraft/vote/" + userName, '_blank')}>minecraftservery.cz <FiLink /></button>
                           <button type={"submit"} onClick={() => window.open("https://craftlist.org/darkcraft?nickname=" + userName, '_blank')}>craftlist.org <FiLink /></button>
                           <button type={"submit"} onClick={() => window.open("https://czech-craft.eu/server/darkcraft-9823/vote?user=" + userName, '_blank')}>czech-craft.eu <FiLink /></button>
                           <button type={"submit"} onClick={() => window.open("https://www.minecraft-list.cz/server/darkcraft/vote?name=" + userName, '_blank')}>minecraft-list.cz <FiLink /></button>
                           <button type={"submit"} onClick={() => window.open("https://craftbook.cz/server/74/vote", '_blank')}>craftbook.cz <FiLink /></button>
                       </div>
                </form>
                </div>
            </Wrapper>
        </section>
    );
};

export default Page;