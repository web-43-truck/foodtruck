'use client'



import {Grid} from "@/components/grid"
import PropTypes from 'prop-types'
import React, {ReactNode, useEffect, useState} from "react";
import {NavBar} from "@/components/NavBar";
import Image from "next/image";
import {TruckSchema} from "@/utils/models/Truck";
import {Truck} from "@/app/truck/TruckView";




async function getData(profileId: string): Promise<Profile> {
    console.log(process.env.REST_API_URL)
    const response = await fetch(`${process.env.REST_API_URL}/apis/profile`, {next: {revalidate: 0}})
        if (response.status === 200 || response.status === 304) {
        const result = await response.json()}
        console.log(result)
    const profile = ProfileSchema.array().parse(result?.data)
    return profile
} else {
    throw new Error("Retrieving data failed")
}



export function User() {
        const links = [
            {linkName: 'Home', href: '/'},
            {linkName: 'Sign Out', href: '/'}

        ]
        return (
            <>




            </>
        )
    }



