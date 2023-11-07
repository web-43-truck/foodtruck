
import {NavBar} from "@/components/NavBar";
import TruckRegistration from "./truck-registration";
import {TruckMap} from "@/components/TruckMap";
import React from "react";
import {Footer} from "@/components/Footer";


export default function TruckRegistrationPage(){
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <TruckRegistration/>

            <Footer/>
        </>
    )
}