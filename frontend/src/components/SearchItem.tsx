import React from 'react';
import {Truck} from "@/utils/models/Truck";
import Link from "next/link";

type SearchItemProps = {
    truck: Truck
};

export function SearchItem(props: SearchItemProps) {
    const {truck} = props
    const { truckName, truckDescription, truckId } = truck

    return (
        <>
            <section className="py-6 px-20">
                <Link href={`/truck/${truckId}`}><h2 className="text-2xl underline text-accent-content">{truckName}</h2></Link>
                <p className="text-lg">{truckDescription}</p>
            </section>
        </>
    );
}







