import type { Metadata } from 'next'
import './globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Inter } from 'next/font/google'
import React from "react";
import {inter} from "@/app/ui/fonts";
import {NavBar} from "@/components/NavBar";



export const metadata: Metadata = {
    title: 'Food Truck Hunter',
    description: 'Let us help you find the food truck you need!',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    const links = [
        {linkName: 'Sign-in', href: '/signin'},
        {linkName: 'Sign-up', href: '/signup'},
        {linkName: 'Add Truck', href: '/AddTruck'}
    ]
    return (
        <html data-theme="cupcake" lang="en">
        <body className={`${inter.className} antialiased`}>
        <NavBar links={links}/>
        {children}</body>
        </html>
    )
}