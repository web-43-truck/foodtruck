'use client'



import {Grid} from "@/components/grid"
import PropTypes from 'prop-types'
import React, {ReactNode} from "react";
import {NavBar} from "@/components/NavBar";
import Image from "next/image";
import {TruckSchema} from "@/utils/models/Truck";
import {Truck} from "@/app/truck/TruckView";



    export function User() {
        const links = [
            {linkName: 'Home', href: '/'},
            {linkName: 'Sign Out', href: '/'}

        ]
        return (
            <>


                <Grid/>

            </>
        )
    }



