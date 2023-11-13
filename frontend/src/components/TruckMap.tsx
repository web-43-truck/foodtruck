'use client'
import React, {useState} from "react";
import {Pin} from "@/app/Pin";
import Map from "react-map-gl";
import {Location} from "@/utils/models/Location"


type TruckMapProps ={
    locations: Location[]

}
type Point = {
    lat: number;
    lng: number;
}
export function TruckMap({locations}: TruckMapProps) {
    const points: Point[] = locations.map((location) => ({
        lat: location.locationLat,
        lng: location.locationLng,
    }))

    return(
        <section className="grid">
            <div className="justify-self-center my-14">
                <Map
                    initialViewState={{
                        latitude: 35.106766,
                        longitude: -106.629181,
                        zoom: 10
                    }}
                    mapboxAccessToken={process.env["NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN"]}
                    style={{ width: 600, height: 400 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    {points.map((point:any, index:any) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
                </Map>
            </div>
        </section>
    )
}