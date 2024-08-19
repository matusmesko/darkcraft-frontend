'use client'

import React, {useEffect, useState} from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import {getMcServerInfo} from "@/uitls/fetch";

const Header = () => {

    const [playerCount, setPlayerCount] : number = useState(0);

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
                        <p className={styles.serverInfo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores consequatur cumque deserunt doloremque ducimus, et illo incidunt inventore magni maxime obcaecati odio quos ratione repudiandae rerum suscipit! Mollitia, velit?</p>
                        <div className={styles.counterContainer}>
                            <div></div>
                            <p>Online {playerCount == 1 && playerCount + " hráč"}{(playerCount <= 4 && playerCount > 1 )&& playerCount + " hráči"}{(playerCount >= 5 || playerCount === 0) && playerCount + " hráčů"}</p>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src="/včely.png" alt="včely"/>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;