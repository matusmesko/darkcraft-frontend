import React from 'react';
import SmallHeader from "@/components/smallHeader/SmallHeader";

export default function Pravidla({children}: { children: React.ReactNode }) {
    return (
        <>
            <SmallHeader text={"Pravidla"} desc={"Aktualní pravidla serveru mc.darkcraft.cz"}/>
            {children}
        </>
    )
}