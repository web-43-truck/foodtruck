
import Image from "next/image"
import React from "react"
import { Truck, TruckSchema } from "@/utils/models/Truck"
import { ListItem } from "@/components/ListItem"
import { SearchItem } from "@/components/SearchItem"
import {FoodType} from "@/components/FoodType";
import {Wrapper} from "@/components/Wrapper";

export async function SearchView() {
    const trucks = await getData()

    return (
        <>

            <div className="grid py-14">
                <a href="/" className="justify-self-center">
                    <Image
                        src="/food-truck-icon.png"
                        width={500}
                        height={500}
                        alt="food truck icon"
                        className="w-56 h-50"
                    />
                </a>
            </div>

            <section className="grid mb-6">
                <ul className="justify-self-center menu menu-horizontal bg-base-200 rounded-box gap-10 text-xl">
                    <ListItem itemName={"Location"} href={""} />
                    <li>
                        <details>
                            <summary className="hover:bg-accent-focus hover:rounded-xl">Cuisine</summary>

                            {/*<FoodType onCuisineSelect={}/>*/}

                        </details>
                    </li>
                </ul>
            </section>
            <Wrapper trucks={trucks}/>
        </>
    )
}

// Function to fetch the truck data
async function getData(): Promise<Truck[]> {
    console.log(process.env.REST_API_URL)
    const response = await fetch(`${process.env.REST_API_URL}/apis/truck`, {
        next: { revalidate: 0 },
    })

    if (response.status === 200 || response.status === 304) {
        const result = await response.json()
        console.log(result);
        const trucks = TruckSchema.array().parse(result?.data)
        return trucks
    } else {
        throw new Error("Retrieving data failed");
    }
}


