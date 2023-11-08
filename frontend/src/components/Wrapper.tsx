'use client'

import {useState} from "react";
import {Truck} from "@/utils/models/Truck";
import {FilterList} from "@/components/FilterList";

type WrapperProps = {
    trucks: Truck[]
}
export function Wrapper({trucks}: WrapperProps) {
    const [truckList, setTruckList] = useState(trucks)
    return (
        <>
            <FilterList trucks={truckList}/>
        </>
    )
}