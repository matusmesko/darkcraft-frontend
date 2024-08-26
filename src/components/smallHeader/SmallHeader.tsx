import React from 'react';
import styles from "./page.module.scss"

interface propTypes {
    text: string,
    desc: string
}

const SmallHeader = ({text, desc} : propTypes) => {
    return (
        <header className={styles.header}>
            <h1>{text}</h1>
            <p>{desc}</p>
        </header>
    );
};

export default SmallHeader;