import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import Card from "@/components/servers/src/Card";

const Servers = () => {

    const desc : string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem nam vero?";

    return (
        <section className={styles.servers}>
            <Wrapper>
                <div className={styles.container}>
                    <h3>Naše servery</h3>
                    <div className={styles.cardsContainer}>
                        <Card title={"Survival"} desc={desc} image={"/meč.png"} color={styles.green}/>
                        <Card title={"Oneblock"} desc={desc} image={"/tools.png"} color={styles.yellow}/>
                        <Card title={"KitPVP"} desc={desc} image={"/brnenie.png"} color={styles.red}/>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Servers;