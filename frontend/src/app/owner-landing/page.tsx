'use server'
import {NavBar} from "@/components/NavBar";
<<<<<<< HEAD:frontend/src/app/owner-landing/page.tsx
import {Footer} from "@/components/Footer";
import 'mapbox-gl/dist/mapbox-gl.css'

export default function OwnerLanding() {
=======
import {SearchView} from "@/app/SearchView";
import {Truck, TruckSchema} from "@/utils/models/Truck";

<<<<<<< HEAD
export default function Home() {
=======

export default async function SearchPage(){
    const trucks = await getData()
>>>>>>> 6ac915f1bbe3521116ac0a49b3098481be34673b
>>>>>>> development:frontend/src/app/page.tsx
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
<<<<<<< HEAD:frontend/src/app/owner-landing/page.tsx
            <NavBar links={links}/>
            <Footer/>
        </>
    )
}
=======
            <section>
                <NavBar links={links}/>
            </section>
<<<<<<< HEAD
        </>
    )
}
=======
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
>>>>>>> 6ac915f1bbe3521116ac0a49b3098481be34673b
>>>>>>> development:frontend/src/app/page.tsx
