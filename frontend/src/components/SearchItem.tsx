import React from 'react';
import {Truck} from "@/utils/models/Truck";
import Link from "next/link";
import {FavoriteButton} from "@/components/favoriteButton";
import {Session} from "@/utils/FetchSession";
import {Favorite} from "@/utils/models/Favorite";


type SearchItemProps = {
    truck: Truck
    session:Session | undefined
    favorites: Favorite[]
};

export function SearchItem(props: SearchItemProps) {
    const {truck, favorites, session} = props
    const { truckName, truckDescription, truckId } = truck

    return (
        <>
            <section className="py-6 md:px-20">
                <Link href={`/truck/${truckId}`}><h2 className="text-2xl underline text-accent-content">{truckName}</h2></Link>
                <p className="text-lg">{truckDescription}</p>
                {session ? ( <FavoriteButton favorites={favorites} truckId={truckId} session={session}/>) : ''}
            </section>
        </>
    );
}







