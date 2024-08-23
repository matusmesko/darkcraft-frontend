import React from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import {promises as fs} from "fs";
import { RiVipCrownFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";
import { IoLogoGameControllerA } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import Card from "@/app/adminteam/src/Card";
const Page = async () => {

    const file = await fs.readFile(process.cwd() + "/adminteam.json", "utf-8");
    const data = JSON.parse(file);

    return (
        <section className={styles.adminteam}>
            <Wrapper>
                <div className={styles.container}>
                    { data.owner.show &&
                        <div className={styles.majitel}>
                            <h3>Majitel <RiVipCrownFill/></h3>
                            <div className={styles.cardContainer}>
                                {
                                    data.owner.players.map((e: any, index: any) => {
                                        return (
                                            <Card key={index} color={e.color} name={e.name} rank={e.rank}
                                                  uuid={e.uuid}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    { data.management.show &&
                        <div className={styles.management}>
                            <h3>Vedení <FaUserTie/></h3>
                            <div className={styles.cardContainer}>
                                {
                                    data.management.players.map((e: any, index: any) => {
                                        return (
                                            <Card key={index} color={e.color} name={e.name} rank={e.rank}
                                                  uuid={e.uuid}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    {
                        data.technik.show &&
                        <div className={styles.technik}>
                            <h3>Technik <FaCode /></h3>
                            <div className={styles.cardContainer}>
                                {
                                    data.technik.players.map((e : any, index : any) => {
                                        return (
                                            <Card key={index} color={e.color} name={e.name} rank={e.rank} uuid={e.uuid}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    }

                    {data.helper.show &&
                        <div className={styles.helper}>
                            <h3>Helper <IoShieldHalfSharp/></h3>
                            <div className={styles.cardContainer}>
                                {
                                    data.helper.players.map((e: any, index: any) => {
                                        return (
                                            <Card key={index} color={e.color} name={e.name} rank={e.rank}
                                                  uuid={e.uuid}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    { data.eventer.show &&
                        <div className={styles.eventer}>
                            <h3>Eventer <IoLogoGameControllerA/></h3>
                            <div className={styles.cardContainer}>
                                {
                                    data.eventer.players.map((e: any, index: any) => {
                                        return (
                                            <Card key={index} color={e.color} name={e.name} rank={e.rank}
                                                  uuid={e.uuid}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    { data.builder.show &&
                        <div className={styles.builder}>
                            <h3>Builder <LuConstruction/></h3>
                            <div className={styles.cardContainer}>
                                {
                                    data.builder.players.map((e: any, index: any) => {
                                        return (
                                            <Card key={index} color={e.color} name={e.name} rank={e.rank}
                                                  uuid={e.uuid}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </Wrapper>
        </section>
    );
};

export default Page;