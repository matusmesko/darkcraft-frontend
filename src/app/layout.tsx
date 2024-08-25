import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DarkCraft | Minecraft server",
  description: "Jsme československý Minecraft server, který se zaměřuje především na naši minihru Economy survival. Tento server existuje již přes 2 roky a máme spoustu zkušeností, které jsme zpracovali a uplatnili do jednoho serveru, aby hráč měl perfektní a unikátní, přímo nekonečný zážitek možností, které se u nás dají dělat.",
    icons: {
      icon: "/darkcraftLogo.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navigation/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
