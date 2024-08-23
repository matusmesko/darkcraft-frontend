import React, {useEffect} from 'react';
import styles from "./page.module.scss"
import {promises as fs} from "fs";
import Wrapper from "@/components/wrapper/Wrapper";

const Page = async () => {
    const file = await fs.readFile(process.cwd() + "/pravidla.json", "utf-8");
    const data = JSON.parse(file);
    return (
        <div className={styles.pravidla}>
            <Wrapper>
                <div className={styles.container}>
                    <div>
                        <h3>{data.general.title}</h3>
                        {
                            data.general.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>{data.chat.title}</h3>
                        {
                            data.chat.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>{data.hacks.title}</h3>
                        {
                            data.hacks.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>{data.survival.title}</h3>
                        {
                            data.survival.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>{data.discord.title}</h3>
                        {
                            data.discord.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>{data.events.title}</h3>
                        {
                            data.events.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>{data.punishments.title}</h3>
                        {
                            data.punishments.text.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>

                    <div className={styles.otherInfo}>
                        {
                            data.otherInfo.map((e : string, index : any) => {
                                return (
                                    <p key={index}>{e}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Page;