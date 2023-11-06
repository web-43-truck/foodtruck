// Truck Owner Landing Page

import React from 'react';
import {PublicProfile} from "../backend/src/apis/profile/profile.model";
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";

export default function TruckRegistration() {
            const links = [
            {linkName: 'Sign-out', href: '/'},
            {linkName: 'home', href: '/'},
            {linkName: 'Favorites', href: '/'}
        ]


        return (
            <>
                <section>
                    <NavBar links={links}/>
                </section>
//Session user information goes here

            <div>
            Weclome, username
            </div>
            <form>
                <div className="py-3 required">
                    <label htmlFor="truckName" className="block text-gray text-sm font-bold mb-2">Truck Name</label>
                    <input type="text" id="truckName" name="truckName"
                           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0"></input>
                </div>
                <div className="py-3">
                    <label htmlFor="Food Type" className="block text-gray text-sm font-bold mb-2">
                        Food Type:
                        <select>
                            <option value="American">American</option>
                            <option value="Asian">Asian</option>
                            <option value="BBQ">Barbecue</option>
                            <option value="Drinks">Beverages</option>
                            <option value="over21">Beverages, over 21</option>
                            <option value="poultry">Chicken</option>
                            <option value="Fusion">Fusion</option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="New Mexican">New Mexican</option>
                            <option value="fish">Seafood</option>
                            <option value="seasonal">Seasonal</option>
                            <option value="Desserts">Desserts</option>
                        </select>
                    </label>
                </div>

                <div className="py-3">
                    <label htmlFor="subject" className="block text-gray text-sm font-bold mb-2">Locations</label>
                    <input type="text" id="subject" name="subject"
                           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0"/>
                </div><div className="py-3">
                <button type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Another Location
                </button>
            </div>
                <div className="py-3">
                    <label htmlFor="truckDescription" className="block text-gray text-sm font-bold mb-2">Tell us about your truck</label>
                    <textarea
                        rows={10}
                        name="message"
                        id="message"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>


                </div>
                <div className="py-3">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send
                    </button>
                </div>
                <div className="py-3">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Another Truck
                    </button>
                </div>
            </form>

            <Footer/>
        </>
    )

}
