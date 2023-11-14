import React from 'react';
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import AddTruck from "@/app/AddTruck/AddTruck";
import {Picture} from "@/components/Picture";


export default function () {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <NavBar links={links}/>
            <AddTruck/>
            <Footer/>
        </>
    )
}