import type { Metadata } from 'next'
import './globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Inter } from 'next/font/google'
import React from "react";
import {inter} from "@/app/ui/fonts";



export const metadata: Metadata = {
    title: 'Food Truck Hunter',
    description: 'Let us help you find the food truck you need!',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html data-theme="light" lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    )
}