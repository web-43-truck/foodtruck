import {SearchItem} from "@/components/SearchItem";
import Image from "next/image";
import React from "react";
import {ListItem} from "@/components/ListItem";


export function SearchView() {
    return (
        <>
            <div className="grid py-14">
                <a href="/" className="justify-self-center">
                    <Image src="/food-truck-icon.png"
                           width={500}
                           height={500}
                           alt="food truck icon" className="w-56 h-50"/>
                </a>
            </div>
            <section className="grid">
                <ul className="justify-self-center menu menu-horizontal bg-base-200 rounded-box gap-10 ">
                    <ListItem itemName={"A-Z"} href={""}/>
                    <ListItem itemName={"Location"} href={""}/>
                    <li>
                        <details >
                            <summary>Cuisine</summary>
                                <ul>
                                    <ListItem itemName={"American"} href={""}/>
                                    <ListItem itemName={"Mexican"} href={""}/>
                                    <ListItem itemName={"Italian"} href={""}/>
                                </ul>
                        </details>
                    </li>
                </ul>
            </section>
            <section className="container mx-auto px-14">
                <SearchItem truckName={"Joe's Tacos"} truckDescription={"Cookie croissant jelly cake carrot cake cotton candy caramels cotton candy. Icing oat cake pie marzipan carrot cake cupcake wafer toffee soufflé. Gingerbread oat cake sweet roll sweet roll powder jelly-o fruitcake sugar plum"}/>
                <SearchItem truckName={"Cake Shop"} truckDescription={"Apple pie danish candy marzipan ice cream ice cream. Gingerbread icing donut sugar plum icing dessert candy canes oat cake macaroon. Dragée caramels candy dessert chupa chups dessert lollipop bonbon. Soufflé tiramisu chocolate cake soufflé pie pastry icing liquorice."}/>
                <SearchItem truckName={"Cake Shop"} truckDescription={"Apple pie danish candy marzipan ice cream ice cream. Gingerbread icing donut sugar plum icing dessert candy canes oat cake macaroon. Dragée caramels candy dessert chupa chups dessert lollipop bonbon. Soufflé tiramisu chocolate cake soufflé pie pastry icing liquorice."}/>
                <SearchItem truckName={"Cake Shop"} truckDescription={"Apple pie danish candy marzipan ice cream ice cream. Gingerbread icing donut sugar plum icing dessert candy canes oat cake macaroon. Dragée caramels candy dessert chupa chups dessert lollipop bonbon. Soufflé tiramisu chocolate cake soufflé pie pastry icing liquorice."}/>
            </section>

        </>
    )
}