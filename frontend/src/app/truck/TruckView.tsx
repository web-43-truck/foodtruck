
import React from "react";
import {Picture} from "@/components/Picture";
import {TruckMap} from "@/components/TruckMap";
import {Truck, TruckSchema} from "@/utils/models/Truck";




export async function Truck() {
    const trucks = await getData()
    console.log(trucks)
    return (
        <>
            <h1 className="text-center text-8xl mt-14">
                {trucks.length > 0 ? trucks[0].truckName : "No Truck Name"}
            </h1>
            <section className="container mx-auto">
                <div className="flex md:justify-evenly rounded-xl">
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                </div>
            </section>
            <section className="bg-base-300 py-10 shadow-lg">
                <section className="container mx-auto ">
                    <div className="gap-x-6 text-3xl flex flex-row justify-center">
                        <h2 >Open: 6pm</h2>
                        <h2 >Close: 10pm</h2>
                    </div>
                    <p className="flex justify-center text-3xl mt-8 px-20">
                        {trucks.length > 0 ? trucks[0].truckDescription : "No Truck Description"}
                    </p>
                    <div className="text-center text-2xl mt-8">
                        <h3 className="underline text-3xl">Address:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </section>
            </section>
            <section>
                <TruckMap/>
            </section>
        </>
    )
}

async function getData(): Promise<Truck[] > {
    console.log(process.env.REST_API_URL)
    const response = await fetch(`${process.env.REST_API_URL}/apis/truck`, {next: {revalidate: 0}});
    if (response.status === 200 || response.status === 304) {
        const result = await response.json();
        console.log(result)
        const trucks = TruckSchema.array().parse(result?.data);
        return  trucks ;
    } else {
        throw new Error("Retrieving data failed");
    }
}


