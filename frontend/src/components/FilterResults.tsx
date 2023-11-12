'use client'

import React, {useState} from "react";
import {Truck} from "@/utils/models/Truck";
import {SearchItem} from "@/components/SearchItem";

type FoodTypeProps = {
    trucks: Truck[],
    truckFoodCategory: string
}

export function SearchResult({trucks, truckFoodCategory}: FoodTypeProps) {
console.log(truckFoodCategory)
    return (
        <>

            <section className="container mx-auto px-14">
                {trucks
                    .filter((truck) => truck.truckFoodCategory === truckFoodCategory)
                    .map((truck) => (
                        <SearchItem key={truck.truckId} truck={truck}/>
                    ))}
            </section>
        </>
    )
}
