import React from 'react';
import SmallHeader from "@/components/smallHeader/SmallHeader";

export default function Hlasovani({children}: { children: React.ReactNode }) {
    return (
        <>
            <SmallHeader text={"Hlasování"}/>
            {children}
        </>
    )
}