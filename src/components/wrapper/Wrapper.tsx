import React from 'react';
import styles from "./page.module.scss"

type propTypes = {
    children:  React.ReactNode,
    style: React.CSSProperties,
    className: String | null
}

const Wrapper = ({children,style,className} : any) => {
    return (
        <div className={`${styles.contentWrapper} ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Wrapper;