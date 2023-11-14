'use server'
import {NavBar} from "@/components/NavBar";
import {HomePage} from "@/app/HomePage";
import {Truck, TruckSchema} from "@/utils/models/Truck";


type HomeProps = {
    searchParams: {
        name: string
    }
}

export default async function Home({searchParams}: HomeProps) {
    const trucks = await getData(searchParams.name)

    const links = [
        {linkName: 'Sign-in', href: '/signin'},
        {linkName: 'Sign-up', href: '/signup'},
    ]

    return (
        <>
            <section>
                <NavBar links={links}/>
            </section>

            <HomePage trucks={trucks} initialSearch={searchParams.name}/>

        </>
    )
}

async function getData(name: string): Promise<Truck[]> {
    let assignedName = name ? name : ''
    const response = await fetch(`${process.env.REST_API_URL}/apis/truck/truckSearch/?name=${assignedName}`, {
        next: {revalidate: 0},
    })

    if (response.status === 200 || response.status === 304) {
        const result = await response.json()
        const trucks = TruckSchema.array().parse(result?.data)
        return trucks
    } else {
        throw new Error("Retrieving data failed");
    }
}
