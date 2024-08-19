import styles from "./page.module.scss";
import Header from "../components/header/Header"
import Servers from "@/components/servers/Servers";
import Discord from "@/components/discord/Discord";

export default function Home() {
  return (
   <>
      <Header/>
       <Servers/>
       <Discord/>
   </>
  );
}
