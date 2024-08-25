import React from 'react';
import SmallHeader from "@/components/smallHeader/SmallHeader";

export default function Gdpr({children}: { children: React.ReactNode }) {
    return (
        <>
            <SmallHeader text={"GDPR"}/>
            {children}
        </>
    )
}