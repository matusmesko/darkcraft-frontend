'use client'
import React, {useEffect, useState} from 'react';
import styles from "./page.module.scss"
import Wrapper from "@/components/wrapper/Wrapper";
import { FiLink } from "react-icons/fi";
import {getCraftBookAPI, getMinecraftListAPI, getMinecraftServeryAPI} from "@/uitls/fetch";
import {getCzechCraftAPI} from "@/uitls/fetch";
import {getCraftListAPI} from "@/uitls/fetch";

const Page = () => {
    const [userName, setUsername] = useState("");

    const [minecraftServery, setMinecraftServery]: any = useState(0);
    const [czechCraft, setCzechCraft]: any = useState(0);
    const [craftList, setCraftlist]: any = useState(0);
    const [craftBook, setCraftBook]: any = useState(0);
    const [minecraftList, setMinecraftList]: any = useState(0);


    useEffect(() => {


        const getData = async () => {

            const msData = await getMinecraftServeryAPI()
            const craftBookData = await getCraftBookAPI()
            const mclistData = await getMinecraftListAPI()
            // const czCraftData = await getCzechCraftAPI()
            // const craftListData = await getCraftListAPI()
            setMinecraftServery(msData.position.votes)
            setCraftBook(craftBookData.pozice_serveru)
            setMinecraftList(mclistData.rank)
            // setCzechCraft(czCraftData.position)
            // setCraftlist(craftListData.rank)
        }

        getData()
    }, [])


    return (
        <section className={styles.hlasovani}>
            <Wrapper>
                <div className={styles.container}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputContainer}>
                            <img
                                src={"https://render.skinmc.net/3d.php?user=" + userName + "&vr=-10&hr0&hrh=25&aa=&headOnly=true&ratio=50"}
                                alt={"img"}/>
                            <input type="text" placeholder={"Minecraft Nick"}
                                   onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type={"submit"}
                                    onClick={() => window.open("https://minecraftservery.eu/server/darkcraft/vote/" + userName, '_blank')}>minecraftservery.cz <FiLink/>
                            </button>
                            <button type={"submit"}
                                    onClick={() => window.open("https://craftlist.org/darkcraft?nickname=" + userName, '_blank')}>craftlist.org <FiLink/>
                            </button>
                            <button type={"submit"}
                                    onClick={() => window.open("https://czech-craft.eu/server/darkcraft-9823/vote?user=" + userName, '_blank')}>czech-craft.eu <FiLink/>
                            </button>
                            <button type={"submit"}
                                    onClick={() => window.open("https://www.minecraft-list.cz/server/darkcraft/vote?name=" + userName, '_blank')}>minecraft-list.cz <FiLink/>
                            </button>
                            <button type={"submit"}
                                    onClick={() => window.open("https://craftbook.cz/server/74/vote", '_blank')}>craftbook.cz <FiLink/>
                            </button>
                        </div>
                    </form>
                    <div className={styles.statContainer}>
                        <div>

                        </div>
                    </div>

                </div>
            </Wrapper>
        </section>
    );
};

export default Page;