'use client'



import {Grid} from "@/components/grid"
import PropTypes from 'prop-types'
import React, {ReactNode, useEffect, useState} from "react";
import {favorite, FavoriteSchema} from "@/utils/models/Favorite"
import {TruckSchema} from "@/utils/models/Truck";
import {Truck} from "@/app/truck/TruckView";
import { Favorite } from "@/utils/models/Favorite"







async function getData(favoriteProfileId: string): Promise<Favorite> {
    console.log(process.env.REST_API_URL)
    const response = await fetch(`${process.env.REST_API_URL}/apis/profile`, {next: {revalidate: 0}})
    if (response.status === 200) {
        const result = await response.json()
    } else if (response.status === 304) {
        const result = await response.json()

    console.log(result)
    const favoriteProfileId = FavoriteSchema.array().parse(result?.data)
    return favoriteProfileId
} else {
    throw new Error("Retrieving data failed")
}



    async function getData(): Promise<Truck[] > {
        console.log(process.env.REST_API_URL)
        const response = await fetch(`${process.env.REST_API_URL}/apis/truck`, {next: {revalidate: 0}});
        if (response.status === 200 || response.status === 304) {
            const result = await response.json();
            console.log(result)
            const trucks = TruckSchema.array().parse(result?.data);
            return  trucks ;
        } else {
            throw new Error("Retrieving data failed");
        }
    }}


export default function User() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Sign Out', href: '/'}

    ]
    return (
        <>




        </>
    )
}