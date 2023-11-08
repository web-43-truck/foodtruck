'use server'
import {NavBar} from "@/components/NavBar";
import {SearchView} from "@/app/SearchView";
import {Truck, TruckSchema} from "@/utils/models/Truck";


export default async function SearchPage(){
    const trucks = await getData()
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <SearchView trucks={trucks}/>
        </>
    )
}

async function getData(): Promise<Truck[]> {
    console.log(process.env.REST_API_URL)
    const response = await fetch(`${process.env.REST_API_URL}/apis/truck`, {
        next: { revalidate: 0 },
    })

    if (response.status === 200 || response.status === 304) {
        const result = await response.json()
        console.log(result);
        const trucks = TruckSchema.array().parse(result?.data)
        return trucks
    } else {
        throw new Error("Retrieving data failed");
    }
}