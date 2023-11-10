
import React from "react";
import {Picture} from "@/components/Picture";
import {TruckMap} from "@/components/TruckMap";
import {Truck} from "@/utils/models/Truck";
import {Location} from "@/utils/models/Location"


type TruckComponentProps = {
    truck: Truck,
    locations: Location[]
}


export async function TruckComponent({truck, locations}: TruckComponentProps) {

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
                        <h2 className="underline text-3xl">Hours:</h2>
                        <span>Open:</span>
                        <p>
                            {locations.map((location) => location.locationSunrise)}
                        </p>
                        <span>Close:</span>
                        <p >
                            {locations.map((location) => location.locationSunset)}
                        </p>
                    </div>
                    <div className="text-center text-2xl mt-8">
                        <h3 className="underline text-3xl">Who We Are:</h3>
                        <p className="flex justify-center text-3xl mt-8 px-20">
                            {truck.truckDescription ? truck.truckDescription : "No Truck Description"}
                        </p>
                    </div>
                    <div className="text-center text-2xl mt-8">
                        <h3 className="underline text-3xl">Address:</h3>
                        <p>
                            {locations.map((location) => location.locationAddress)}
                        </p>
                    </div>
                </section>
            </section>
            <section>
                <TruckMap/>
            </section>
        </>
    )
}



