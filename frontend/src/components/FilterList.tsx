import {SearchItem} from "@/components/SearchItem";
import React from "react";
import {Truck} from "@/utils/models/Truck";

type FilterListProps = {
    trucks: Truck[]
}
export function FilterList({trucks}: FilterListProps){

    return(
        <>
            <section className="container mx-auto px-14">
                {trucks
                    .filter((truck) => truck.truckFoodCategory === 'Asian')
                    .map((truck) => (
                        <SearchItem key={truck.truckId} truck={truck} />
                    ))}
            </section>
        </>
    )
}