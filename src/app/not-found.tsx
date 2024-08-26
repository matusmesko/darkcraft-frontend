import React from 'react';
import SmallHeader from "@/components/smallHeader/SmallHeader";
import styles from "./notfound.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import Image from "next/image"

const NotFound = () => {
    return (
        <>
        <header className={styles.header}>
            <h1>404 ERROR</h1>
            <p>Stránka nebyla nalezena</p>
        </header>
            <div className={styles.errorPage}>
                <Wrapper>
                    <section className={styles.errorContainer}>
                        <img src="/404.png" alt="404"/>
                        <p>Požadovaná stránka nebyla nalezena.</p>
                    </section>
                </Wrapper>
            </div>
        </>
    );
};

export default NotFound;