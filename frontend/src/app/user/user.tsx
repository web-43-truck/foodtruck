'use client'



import {Grid} from "@/components/grid"
import PropTypes from 'prop-types'
import React, {ReactNode, useEffect, useState} from "react";







async function getData(profileId: string): Promise<Favorite> {
    console.log(process.env.REST_API_URL)
    const response = await fetch(`${process.env.REST_API_URL}/apis/profile`, {next: {revalidate: 0}})
    if (response.status === 200) {
        const result = await response.json()
    } else if (response.status === 304) {
        const result = await response.json()

    console.log(result)
    const profile = FavoriteSchema.array().parse(result?.data)
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



