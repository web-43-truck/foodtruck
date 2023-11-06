import Image from "next/image";
import React from "react";

export function Footer(){
    return (
        <>
            <div className="grid py-14">
                <a href="/" className="justify-self-center">
                    <Image src="/food-truck-icon.png"
                           width={500}
                           height={500}
                           alt="food truck icon" className="w-20"/>
                </a>
            </div>
        </>
    )
}