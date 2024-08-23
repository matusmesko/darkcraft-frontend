import React from 'react';
import styles from "./page.module.scss"

interface propTypes {
    text: string
}

const SmallHeader = ({text} : propTypes) => {
    return (
        <header className={styles.header}>
            <h1>{text}</h1>
        </header>
    );
};

export default SmallHeader;