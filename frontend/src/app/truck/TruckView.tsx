
import React from "react";
import {Picture} from "@/components/Picture";
import {TruckMap} from "@/components/TruckMap";
import {Truck} from "@/utils/models/Truck";


type TruckComponentProps = {
    truck: Truck[]
}


export async function TruckComponent(truck: TruckComponentProps) {

    return (
        <>
            <h1 className="text-center text-8xl mt-14">
                {truck.truckName ? truck.truckName : "No Truck Name"}
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
                        {truck.truckDescription ? truck.truckDescription : "No Truck Description"}
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



