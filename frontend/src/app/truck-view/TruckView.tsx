'use client'
import React from "react";
import {Picture} from "@/components/Picture";


export function TruckView() {
    return (
        <>
            <h1 className="text-center text-8xl mt-14">Joe's Tacos</h1>
            <section className="container mx-auto">
                <div className="flex md:justify-evenly rounded-xl">
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                </div>
            </section>
            <section className="bg-base-300 py-10 shadow-lg">
                <section className="container mx-auto ">
                    <div className="text-center gap-x-6 text-3xl ">
                        <h2 >Open: 6pm</h2>
                        <h2 >Close: 10pm</h2>
                    </div>
                    <div className="text-center text-2xl mt-8">
                        <h3 >Address:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    <p className="text-center text-3xl mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum ipsa neque nobis reprehenderit totam voluptatibus! Alias, aut autem eum explicabo illo illum maxime molestias mollitia provident quasi sit vel!</p>
                </section>
            </section>
        </>
    )
}




