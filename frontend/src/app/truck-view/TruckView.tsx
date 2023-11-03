'use client'
import React from "react";
import { Picture } from "@/components/Picture";

const images = [
    "https://placekitten.com/400/400",
    "https://placekitten.com/400/400",
    "https://placekitten.com/400/400",
];

const openingHours = {
    open: "6pm",
    close: "10pm",
};

const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum ipsa neque nobis reprehenderit totam voluptatibus! Alias, aut autem eum explicabo illo illum maxime molestias mollitia provident quasi sit vel!";

const address = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

export function TruckView() {
    return (
        <>
            <h1 className="text-center text-8xl mt-14">Joe's Tacos</h1>
            <section className="container mx-auto">
                <div className="flex md:justify-evenly rounded-xl">
                    {images.map((image, index) => (
                        <Picture key={index} text={image} alt="placeholder" />
                    ))}
                </div>
            </section>
            <section className="bg-base-300 py-14 shadow-lg">
                <section className="container mx-auto">
                    <div className="gap-x-6 text-3xl flex flex-row justify-center">
                        <h2>Open: {openingHours.open}</h2>
                        <h2>Close: {openingHours.close}</h2>
                    </div>
                    <p className="flex justify-center text-3xl mt-8 px-20">{description}</p>
                    <div className="text-center text-2xl mt-8">
                        <h3 className="underline text-3xl">Address:</h3>
                        <p>{address}</p>
                    </div>
                </section>
            </section>
        </>
    );
}




