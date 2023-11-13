'use client'

// import React, {useState} from "react";
// import {Truck} from "@/utils/models/Truck";
// import {SearchItem} from "@/components/SearchItem";
//
//
// type FoodTypeProps = {
//     trucks: Truck[],
//     truckFoodCategory: string
// }
//
// export function FilterResults({trucks, truckFoodCategory}: FoodTypeProps) {
//     console.log("truckFoodCategory", truckFoodCategory)
//     return (
//         <>
//             <section className="container mx-auto px-14">
//                 {trucks
//                     .filter((truck) => truck.truckFoodCategory === truckFoodCategory || truckFoodCategory === '')
//                     .map((truck) => (
//                         <SearchItem key={truck.truckId} truck={truck}/>
//                     ))}
//             </section>
//         </>
//     )
// }
