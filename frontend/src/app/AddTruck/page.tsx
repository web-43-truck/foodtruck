import React from 'react';
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {AddTruck} from "@/app/AddTruck/AddTruck";
import {getSession} from "@/utils/FetchSession";
// import {Picture} from "@/components/Picture";


export default async function () {
    const session = await getSession()
    if (!session || !session?.profile.profileIsTruckOwner) return <></>

    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <NavBar links={links}/>
            <AddTruck session={session}/>
            <Footer/>
        </>
    )
}