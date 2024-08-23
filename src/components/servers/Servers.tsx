import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import Card from "@/components/servers/src/Card";
import {promises as fs} from "fs";

const Servers = async () => {
    const file = await fs.readFile(process.cwd() + "/settings.json", "utf-8");
    const data = JSON.parse(file);

    return (
        <section className={styles.servers}>
            <Wrapper>
                <div className={styles.container}>
                    <h3>Naše servery</h3>
                    <div className={styles.cardsContainer}>
                        <Card title={"Survival"} desc={data.survival} image={"/meč.png"} color={styles.green}/>
                        <Card title={"Oneblock"} desc={data.oneblock} image={"/tools.png"} color={styles.yellow}/>
                        <Card title={"KitPVP"} desc={data.kitpvp} image={"/brnenie.png"} color={styles.red}/>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Servers;