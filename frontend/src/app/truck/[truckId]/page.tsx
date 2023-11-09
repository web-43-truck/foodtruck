'use server'
import {NavBar} from "@/components/NavBar";
import {TruckComponent} from "../TruckView";
import {Truck, TruckSchema} from "@/utils/models/Truck"


type TruckPageProps = {
    params: {truckId: string},
}
export default async function TruckPage(props: TruckPageProps){
    console.log(props.params)
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]


    const truck = await getData(props.params.truckId)
    if(truck === null) {
        return (<><h1>No Truck Found</h1> </>)
    }
    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <TruckComponent truck={truck} key={process.env["MAPBOX_ACCESS_TOKEN"]} />
        </>
    )
}

// async function getData(truckId: string): Promise<Truck | null > {
//     console.log(process.env.REST_API_URL)
//     const response = await fetch(`${process.env.REST_API_URL}/apis/truck/${truckId}`, {next: {revalidate: 0}});
//     if (response.status === 200 || response.status === 304) {
//         const result = await response.json();
//         console.log("api response", result?.data)
//         if(result === null) {
//             return null
//         }
//         const trucks = TruckSchema.parse(result?.data);
//         return  trucks ;
//     } else {
//         throw new Error("Retrieving data failed");
//     }
// }

async function getData(truckId: string): Promise<Truck[] | null> {
    console.log(process.env.REST_API_URL);
    const response = await fetch(`${process.env.REST_API_URL}/apis/truck/${truckId}`, { next: { revalidate: 0 } });

    if (response.status === 200 || response.status === 304) {
        const result = await response.json();
        console.log("API Response:", result?.data);

        if (result === null) {
            return null;
        }

        // Directly return the array if it's an array
        if (Array.isArray(result.data)) {
            return result.data;
        } else {
            // If it's an object, parse it with TruckSchema
            const trucks = TruckSchema.array().parse(result?.data);
            return trucks;
        }
    } else {
        throw new Error("Retrieving data failed");
    }
}

