// Truck Owner Landing Page

import React from 'react';
import {NavBar} from "@/components/NavBar";
// @ts-ignore
import {Footer} from "@/components/Footer";

export default function TruckRegistration(){

        const ()
        return (
            <>
                <section>
            <NavBar/>/section>
        <form>
            <div className="py-3">
                <label htmlFor="name" className="block text-gray text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name"
                       className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0"></input>
            </div>
            <div className="py-3">
                <label htmlFor="email" className="block text-gray text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email"
                       className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0">
            </div>
            ​
            <div className="py-3">
                <label htmlFor="subject" className="block text-gray text-sm font-bold mb-2">subject</label>
                <input type="text" id="subject" name="subject"
                       className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray focus:bg-white focus:ring-0">
            </div>
            <div className="py-3">
                <label htmlFor="message" className="block text-gray text-sm font-bold mb-2">Message</label>
                <textarea
                    rows="3"
                    name="message"
                    id="message"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
​
                </textarea>
            </div>
            <div className="py-3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
            </div>
            const [truck_Name, setTruckName]=React.useState=('');
            <label htmlFor="name-field"><input>
            Name:
            </label>
            <input
                id="truck-name"
                value={truck_name}
                onChange={event => {
                    setName(event.target.value);
                }}
            />
            <label htmlFor="truck-food-category">
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
            <input type="submit" value="Submit" />
        </form>

    <footer/>
        )
    </>
    )
}
