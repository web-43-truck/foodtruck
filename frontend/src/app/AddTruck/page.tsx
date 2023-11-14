import React from 'react';
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import TruckForm from "@/app/AddTruck/TruckForm";
import {Picture} from "@/components/Picture";


export default function AddTruck() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <NavBar links={links}/>
            <TruckForm/>
            <Footer/>
        </>
    )
}