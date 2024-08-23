import React from 'react';
import styles from "../page.module.scss"
interface propTypes {
    image: string | undefined,
    title: string | undefined,
    desc: string | undefined,
    color: React.CSSProperties | string | any | undefined,

}


const Card = ({image, title, desc, color} : propTypes) => {
    return (
        <div className={styles.card + " " + color}>
            <div className={styles.cardText}>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <div className={styles.cardImage}>
                <img src={image} alt="obrazok"/>
            </div>
        </div>
    );
};

export default Card;