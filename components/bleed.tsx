import { Bleed } from 'nextra-theme-docs'
import React from "react";

function MyBleed({
 children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="nx-flex nx-justify-center">
            <Bleed full={false}>
                {children}
            </Bleed>
        </div>
    )
}

export {MyBleed}
