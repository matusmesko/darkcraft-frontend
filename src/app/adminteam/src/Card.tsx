import React from 'react';
import styles from "../page.module.scss"

interface propTypes {
    name: string  | null | undefined ,
    rank: string  | null | undefined ,
    color: string  | undefined,
    uuid: string | undefined

}

const Card = ({name, rank, color, uuid} : propTypes) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <img src={"https://visage.surgeplay.com/bust/256/" + uuid} alt="img"/>
                <p className={styles.rank} style={{background: `${color}`}}>{rank}</p>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Card;