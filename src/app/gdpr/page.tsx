import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import {promises as fs} from "fs";

const Page = async () => {
    const file = await fs.readFile(process.cwd() + "/settings.json", "utf-8");
    const data = JSON.parse(file);
    return (
        <section className={styles.gdpr}>
            <Wrapper>
                <p>{data.gdpr}</p>
            </Wrapper>
        </section>
    );
};

export default Page;