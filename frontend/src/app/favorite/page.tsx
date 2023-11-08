import {NavBar} from "@/components/NavBar"
import {Footer} from "@/components/Footer"
import React from "react";

export default function FavoritePage( ) {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'},
        {linkName: 'Sign Out', href: '/'},
]
    return(
        <>



            <section>
                <NavBar links={links}/>
            </section>
            <Footer/>



            </>
    )
}