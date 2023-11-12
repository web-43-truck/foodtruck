'use client'
import Image from "next/image"
import React, {useState} from "react"
import { Truck, TruckSchema } from "@/utils/models/Truck"
import {Wrapper} from "@/components/Wrapper";

type SearchViewProps = {
    trucks: Truck[]
}
export  function SearchView({trucks}: SearchViewProps) {
    const [truckFoodCategory, setTruckFoodCategory] = useState('')
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
                    <input type="text" placeholder="Type here" className="input input-bordered w-2xl " />
                </div>
                <div className="form-control  grid align-self-center px-6 md:px-0 py-6 md:py-0">
                    <label className="label max-w-xl" htmlFor={"truckFoodCategory"}>
                        <span className="label-text">Pick A Food Category</span>
                    </label>
                    <select value={truckFoodCategory} id={"truckFoodCategory"} name={"truckFoodCategory"} onChange={handleChange} className="select select-bordered">
                        <option disabled value={''}>Pick one</option>
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
            <div>
                {truckFoodCategory && <Wrapper trucks={trucks} truckFoodCategory={truckFoodCategory}/>}
            </div>
        </>
    )
}




