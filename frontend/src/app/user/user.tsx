'use client'



import {Grid} from "@/components/grid"
import PropTypes from 'prop-types'
import React, {ReactNode} from "react";
import {NavBar} from "@/components/NavBar";
import Image from "next/image";


export default function User() {
    return (
        <>
            <NavBar/>
            <div className="grid py-14">
                <a href="/" className="justify-self-center">
                    <Image src="/food-truck-icon.png"
                           width={1000}
                           height={1000}
                           alt="food truck icon" className="w-20"/>
                </a>
            </div>
        <Grid/>



        </>
    )
}
