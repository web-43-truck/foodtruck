'use client'

import {GridFavorites} from "@/components/gridFavorites";


import React, {ReactNode} from "react"
import {Picture} from "@/components/Picture";


export function Favorites(props:{Favorites: typeof Favorites[] }) {
    return (
        <>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ml-5">
                    {props.Favorites.map((favorite: any, index: React.Key | null | undefined) => (
                        <li key={index}>

                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}