import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import {FaDiscord} from "react-icons/fa";
import {promises as fs} from "fs";

const Discord = async () => {
    const file = await fs.readFile(process.cwd() + "/settings.json", "utf-8");
    const data = JSON.parse(file);

    return (
        <section className={styles.discord}>
            <Wrapper>
                <div className={styles.container}>
                    <h3>Discord</h3>
                    <div className={styles.discordContainer}>
                        <div className={styles.wumpus}>
                            <img src="/wumpus.webp" alt="wumpus"/>
                        </div>

                        <div className={styles.text}>
                            <div className={styles.textContainer}>
                                <p>{data.discord}</p>
                                <a href="">PRIPOJIT SE NA DISCORD <FaDiscord/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Discord;