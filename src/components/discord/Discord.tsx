import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import {FaDiscord} from "react-icons/fa";

const Discord = () => {
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur at consequuntur, cum dolor est ex explicabo hic illo ipsa nam, numquam perferendis quaerat quia quibusdam sit tempora vel voluptatum.</p>
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