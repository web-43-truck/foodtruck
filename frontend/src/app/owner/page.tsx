import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {EditTrucksGrid} from "@/components/EditTrucksGrid";

export default function OwnerPage() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <EditTrucksGrid/>
            <Footer/>
        </>
    )
}

// EXAMPLE FOR PULLING GRID DATA
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