// Truck Owner Landing Page

import React from 'react';

// import {PublicProfile} from "../backend/src/apis/profile/profile.model";
import {Footer} from "@/components/Footer";

export default function TruckRegistration() {
    const links = [
        {linkName: 'Sign-out', href: '/'},
        {linkName: 'home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]


    return (
        <>

            //Session user information goes here

            <div className="border-slate-200 bg-blue-400 border-4 mx-auto md:mx-24 text-center text-4xl p-1 md:p-4">
                Welcome, username
            </div>


                <div className="py-3 required mx-auto md:mx-24">
                    <label htmlFor="truckName" className="block text-gray text-2xl font-bold mb-2">Truck Name</label>
                    <input type="text" id="truckName" name="truckName" placeholder="Chaim's Kosher HOme Cooking"
                           className="mx-auto mt-1 block w-full rounded-md bg-gray-100 border-blue-400 border-4 background-slate-200 focus:border-gray focus:bg-white focus:ring-0 placeholder:text-black placeholder:italic"></input>
                </div>
                <div className="py-3 mx-auto md:mx-24 dropdown-end">
                    <label htmlFor="Food Type" className=" block text-gray text-xl font-bold mb-2">
                        Food Type:
                        <select className="ms-4 text-black font-medium text-lg group-hover:bg-blue-400 border-4">

                            <option value="American" >American</option>
                            <option value="Asian">Asian</option>
                            <option value="BBQ">Barbecue</option>
                            <option value="Drinks">Beverages</option>
                            <option value="over21">Beverages, over 21</option>
                            <option value="poultry">Chicken</option>
                            <option value="Fusion">Fusion</option>
                            <option value="Italian">Italian</option>
                            <option value="Kosher" selected>Kosher</option>
                            <option value="Mexican">Mexican</option>
                            <option value="New Mexican">New Mexican</option>
                            <option value="fish">Seafood</option>
                            <option value="seasonal">Seasonal</option>
                            <option value="Desserts">Desserts</option>

                        </select>
                    </label>
                    <label htmlFor="Food Type" className=" block text-gray text-xl font-bold mb-2">
                        Meals Served:
                        <select className="ms-4 text-black font-medium text-lg group-hover:bg-blue-400 border-4">
                            <option value="select" selected>Select an option></option>
                            <option value="breakfast Only" selected>Breakfast Only></option>
                </div>

                <div className="py-3 required mx-auto md:mx-24">
                    <label htmlFor="subject"
                           className=" block text-gray text-lg font-bold mb-2">
                        Locations
                    </label>
                    <input type="text"
                           id="location"
                           name="Location"
                           placeholder=" 900 NW 47th St, Oklahoma City, OK 73118"
                           className="mt-2 border-4 border-blue-400 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0 placeholder:italic placeholder:color-black"/>
                </div>
            <div className="py-3 mx-auto md:mx-24">
                <button type="submit"
                        className=" bg-blue-500 hover:bg-blue-700 text-yellow-300 font-bold py-2 px-4 rounded">
                    Add Another Location
                </button>
            </div>
                <div className="py-3 x-auto md:mx-24">
                    <label htmlFor="truckDescription" className="m block text-gray text-sm font-bold mb-2">Tell us about your truck</label>
                    <textarea
                        rows={15}
                        name="message"
                        id="message"
                        className="mt-2 border-4 border-blue-400 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0 placeholder:italic placeholder:color-black"/>


                </div>
                <div className="py-3 mx-auto md:mx-24">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send
                    </button>
                </div>
                <div className="py-3  mx-auto md:mx-24">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Another Truck
                    </button>
                </div>


            <Footer/>
        </>
    )

}
