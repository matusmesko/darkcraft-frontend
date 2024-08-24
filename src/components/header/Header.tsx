'use client'

import React, {useEffect, useState} from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import {getMcServerInfo} from "@/uitls/fetch";

const Header = () => {

    const [playerCount, setPlayerCount] : any = useState(0);

    useEffect(() => {

        const getPlayerCount = async () => {

            const data = await getMcServerInfo()
            setPlayerCount(data.players.online)
        }

        getPlayerCount()

    },[])

    return (
        <header className={styles.header}>
            <Wrapper>
                <div className={styles.container}>
                    <div className={styles.infoContainer}>
                        <h1>Připrav se!</h1>
                        <img src="/darkcraftText.png" alt="darkcraft"/>
                        <p className={styles.serverInfo}>Jsme československý Minecraft server, který se zaměřuje především na naši minihru Economy survival. Tento server existuje již přes 2 roky a máme spoustu zkušeností, které jsme zpracovali a uplatnili do jednoho serveru, aby hráč měl perfektní a unikátní, přímo nekonečný zážitek možností, které se u nás dají dělat. Připojení je možné i skrze Bedrock a port pro tuto edici je: 19132</p>
                        <div className={styles.counterContainer}>
                            <div></div>
                            <p>Online {playerCount == 1 && playerCount + " hráč"}{(playerCount <= 4 && playerCount > 1 )&& playerCount + " hráči"}{(playerCount >= 5 || playerCount === 0) && playerCount + " hráčů"}</p>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src="/včela4.png" alt="včely"/>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;