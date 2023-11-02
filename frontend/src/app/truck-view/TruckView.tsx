'use client'
import Image from "next/image";
import Map from 'react-map-gl'

import React from "react";
import {Pin} from "@/app/Pin";
import {Picture} from "@/components/Picture";


export function TruckView() {
    console.log(process.env["MAPBOX_ACCESS_TOKEN"])
    const [points] = React.useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 }])
    return (
        <>
            <h1 className="text-center text-8xl my-14">Joe's Tacos</h1>
            <section className="container mx-auto">
                <div className="flex md:justify-evenly rounded-xl">
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                    <Picture text={"https://placekitten.com/400/400"} alt={"placeholder"}/>
                </div>
            </section>
            <section className="container mx-auto ">
                <section className="text-center gap-x-6 text-3xl mt-16">
                    <h2 >Open: 6pm</h2>
                    <h2 >Close: 10pm</h2>
                </section>
                <section className="text-center text-2xl mt-8">
                    <h3 >Address:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </section>
                <p className="text-center text-3xl mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum ipsa neque nobis reprehenderit totam voluptatibus! Alias, aut autem eum explicabo illo illum maxime molestias mollitia provident quasi sit vel!</p>
            </section>
            <section>
                <Map
                    initialViewState={{
                    latitude: 35.33,
                    longitude: -106.65,
                    zoom: 9
                }}
                    mapboxAccessToken={"eyJ1IjoiYXp1Y2VuYW0iLCJhIjoiY2xvZzYzaTdmMHRvMTJsczF2b2Z3dnhxMyJ9.QU5AY6rdwtPQ1Au52XtwEQ"}
                    style={{ width: 600, height: 400 }}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    >
                    {/*{points.map((point:any, index:any) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}*/}
                </Map>
            </section>
            <div className="grid py-14">
                <a href="/" className="justify-self-center">
                    <Image src="/food-truck-icon.png"
                    width={500}
                    height={500}
                    alt="food truck icon" className="w-20"/>
                </a>
            </div>
        </>
    )
}




