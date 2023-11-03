
import {NavBar} from "@/components/NavBar";
import {TruckView} from "./TruckView";
import {TruckMap} from "@/components/TruckMap";
import React from "react";
import {Footer} from "@/components/Footer";

export default function TruckPage(){
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/SignUp'},
        {linkName: 'Favorites', href: '/SignUP'}
    ]
    return(
        <>



            <section>
                <NavBar links={links}/>
            </section>

            <TruckView key={process.env["MAPBOX_ACCESS_TOKEN"]}/>
            <TruckMap/>
            <Footer/>
        </>
    )
}