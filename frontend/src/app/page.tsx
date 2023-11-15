'use server'
import {NavBar} from "@/components/NavBar";
import {HomePage} from "@/app/HomePage";
import {Truck, TruckSchema} from "@/utils/models/Truck";
import {getSession} from "@/utils/FetchSession";
import {Favorite, FavoriteSchema} from "@/utils/models/Favorite";


type HomeProps = {
    searchParams: {
        name: string
    }
}

export default async function Home({searchParams}: HomeProps) {
    const {trucks, favorites} = await getData(searchParams.name)
    console.log(favorites)
    const session = await getSession()
    const links = [
        {linkName: 'Sign-in', href: '/signin'},
        {linkName: 'Sign-up', href: '/signup'},
    ]

    return (
        <>
            <section>
                <NavBar links={links}/>
            </section>

            <HomePage trucks={trucks} session={session} favorites={favorites} initialSearch={searchParams.name}/>

        </>
    )
}

async function getData(name: string): Promise<{trucks: Truck[], favorites: Favorite[]}> {
    let assignedName = name ? name : ''
    const response = await fetch(`${process.env.REST_API_URL}apis/truck/truckSearch/?name=${assignedName}`, {
        next: {revalidate: 0},

    })
    console.log(response)
    let trucks: Truck[]=[]
    if (response.status === 200 || response.status === 304) {
        const result = await response.json()
        console.log(result)
        trucks = TruckSchema.array().parse(result?.data)

    } else {
        throw new Error("Retrieving truck data failed");
    }
    const session = await getSession()
    let favorites: Favorite[]= []
    if (session?.profile) {
        const response = await fetch(`${process.env.REST_API_URL}apis/favorite/favoriteProfileId/${session?.profile?.profileId}`, {
            next: {revalidate: 0},
        })
        if (response.status === 200 || response.status === 304) {
            const result = await response.json()
            console.log(result)
            favorites = FavoriteSchema.array().parse(result?.data)

        } else {
            throw new Error("Retrieving favorites data failed");
        }
    }
    return {trucks, favorites}

}
