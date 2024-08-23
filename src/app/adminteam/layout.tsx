import React from 'react';
import SmallHeader from "@/components/smallHeader/SmallHeader";

export default function AdminTeam({children}: { children: React.ReactNode }) {
    return (
        <>
            <SmallHeader text={"Admin Team"}/>
            {children}
        </>
    )
}