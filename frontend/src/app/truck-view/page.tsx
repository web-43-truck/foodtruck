
import {NavBar} from "@/components/NavBar";
import {TruckView} from "./TruckView";
import {TruckMap} from "@/components/TruckMap";
import React from "react";
import {Footer} from "@/components/Footer";

export default function TruckPage(){
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
<<<<<<< HEAD

=======
            <section>
                <NavBar links={links}/>
            </section>
>>>>>>> 0116d29bb79d1d058a144597cb7c8497c48ddd2f
            <TruckView key={process.env["MAPBOX_ACCESS_TOKEN"]}/>
            <TruckMap/>
            <Footer/>
        </>
    )
}