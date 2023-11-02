'use client'
import React from "react";
import {Pin} from "@/app/Pin";
import Map from "react-map-gl";

export function TruckMap() {
    const [points] = React.useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 }])
    return(
        <section className="grid">
            <div className="justify-self-center my-14">
                <Map
                    initialViewState={{
                        latitude: 35.33,
                        longitude: -106.65,
                        zoom: 9
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