'use client'



import {Grid} from "@/components/grid"
import PropTypes from 'prop-types'
import React, {ReactNode, useEffect, useState} from "react";
import {Favorite, FavoriteSchema} from "../../favorite/favorite.model"
import {Truck, TruckSchema} from "@/utils/models/Truck";
import {Profile, ProfileScheme} from "../../apis/profile/profile.model"




export




// export default function getData() {
//     const Favorite = () => {
//         const [favoriteByProfileId, setFavoriteByProfileId] = useState<Array<Truck>>([])
//         const [favoriteByTruckId, setFavoriteByTruckId] = useState<Array<Truck>>([])
//
//         useEffect(() => {
//             fetchData().then(response => )
//         }, [])
//
//         const fetchData = async () => {
//             const profileIds = [''];
//             const truckIds: string[] = [''];
//
//             for (const profileId of profileIds) {
//                 const response = await fetch(`(\`${process.env.REST_API_URL}/apis/profile`)
//                 const data = await response.json()
//                 setFavoriteByProfileId(prevState => [data])
//             }
//
//             for (const truckId: string of truckIds) {
//                 const response = await fetch( `(\`${process.env.REST_API_URL}/apis/profile`)
//                 const data = await response.json()
//                 setFavoriteByTruckId(prevState => [data])
//             }
//         }
//
//         return (
//             <div>
//
//
//                 <h2>Favorite Truck:</h2>
//                 <ul>
//                     {favoriteByTruckId.map((favorite: Array | boolean |
//                         <li key={index}>{favorite}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
//
//     return <Favorite/>;
// }





// export async function getData(): Promise<{favorite: Favorite[], truck: Truck[]}> {
//     const result = await fetch (
//         (`${process.env.REST_API_URL}/apis/favorite` `${process.env.REST_API_URL}/apis/truck`)
//             .then(response => {
//                 if (response.status === 200 || response.status === 304) {
//                     return response.json()
//                 }
//                 throw new Error("Retrieving data failed")
//             }) .catch ((error: any) => console.error(error)) )
//     console.log(result)




    // console.log(process.env.REST_API_URL)
    // const response = await fetch(`${process.env.REST_API_URL}/apis/profile`, `${process.env.REST_API_URL}/apis/truck`)
    //     .then(response => {
    //         if (response.status === 200 || response.status === 304) {
    //             return response.json()
    //         }
    //         console.log(result)
    // })
// if (response.status === 200) {
//         const result = await response.json()
//     } else if (response.status === 304) {
//         const result = await response.json()
//
//     console.log(result)
//     const favoriteProfileId = FavoriteSchema.array().parse(result?.data)
//     return favoriteProfileId
// } else {
//     throw new Error("Retrieving data failed")
// }



    // async function getData(): Promise<Truck[] > {
    //     console.log(process.env.REST_API_URL)
    //     const response = await fetch(`${process.env.REST_API_URL}/apis/truck`, {next: {revalidate: 0}});
    //     if (response.status === 200 || response.status === 304) {
    //         const result = await response.json();
    //         console.log(result)
    //         const truckId = TruckSchema.array().parse(result?.data);
    //         return  truckId ;
    //     } else {
    //         throw new Error("Retrieving data failed");
    //     }
    // }}


// export default function User() {
//     const links = [
//         {linkName: 'Home', href: '/'},
//         {linkName: 'Sign Out', href: '/'}
//
//     ]
//     return (
//         <>
//
//
//
//
//         </>
//     )
// }