'use client'
import Image from "next/image"
import React, {useState} from "react"
import { Truck } from "@/utils/models/Truck"
import {SearchItem} from "@/components/SearchItem";
import {useRouter} from "next/navigation";

type SearchViewProps = {
    trucks: Truck[],
    initialSearch: string
}
export  function HomePage({trucks, initialSearch}: SearchViewProps) {
    const [truckFoodCategory, setTruckFoodCategory] = useState('')
    const router = useRouter()
    const handleSearchChange =(
        event: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/?name=${event.target.value}`)
    }
    const handleChange = (event: any) => {
        setTruckFoodCategory(event.target.value)
        console.log(truckFoodCategory)
    }


    return (
        <>

            <div className="grid py-20 pt-20">
                <a href="/" className="justify-self-center">
                    <Image
                        src="/food-truck-icon.png"
                        width={500}
                        height={500}
                        alt="food truck icon"
                        className="w-56 h-50 pt-20"
                    />
                </a>
            </div>
            <div className={"md:flex md:justify-center text-center gap-4"}>
                <div className={"grid align-self-center px-6 md:px-0"}>
                    <label className="label">
                        <span className="label-text">Search For A Food Truck</span>
                    </label>
                    <input
                        type={"text"}
                        placeholder={"Type here"}
                        className={"input input-bordered w-2xl"}
                        value={initialSearch}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="form-control  grid align-self-center px-6 md:px-0 py-6 md:py-0">
                    <label className="label max-w-xl" htmlFor={"truckFoodCategory"}>
                        <span className="label-text">Pick A Food Category</span>
                    </label>
                    <select
                        value={truckFoodCategory}
                        id={"truckFoodCategory"}
                        name={"truckFoodCategory"}
                        onChange={handleChange}
                        className="select select-bordered"
                    >
                        <option value={''}>Pick one</option>
                        <option value={"American"}>American</option>
                        <option value={"Asian"}>Asian</option>
                        <option value={"Cuban"}>Cuban</option>
                        <option value={"French"}>French</option>
                        <option value={"Greek"}>Greek</option>
                        <option value={"Indian"}>Indian</option>
                        <option value={"Italian"}>Italian</option>
                        <option value={"Mexican"}>Mexican</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
            </div>
            <div className="container mx-auto px-14">
                {trucks
                    .filter((truck) => truck.truckFoodCategory === truckFoodCategory || truckFoodCategory === '')
                    .map((truck) => (
                        <SearchItem key={truck.truckId} truck={truck}/>
                    ))}
            </div>

        </>
    )
}




