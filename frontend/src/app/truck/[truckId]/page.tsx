'use server'
import {NavBar} from "@/components/NavBar";
import {TruckComponent} from "../TruckView";
import {Truck, TruckSchema} from "@/utils/models/Truck"
import {Location, LocationSchema} from "@/utils/models/Location";


type TruckPageProps = {
    params: { truckId: string},
}
export default async function TruckPage(props: TruckPageProps){
    console.log("line 12", props.params)
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
    ]

    const {truckId} = props.params
    const locationTruckId = truckId
    console.log("location truck id line 19", locationTruckId)
    const { truck, locations } = await getData( locationTruckId )

    if(truck === null) {
        return (<><h1>No Truck Found</h1> </>)
    }

    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <TruckComponent truck={truck}  key={process.env["MAPBOX_ACCESS_TOKEN"]}  locations={locations}/>
        </>
    )
}


async function getData( locationTruckId: string ): Promise<{ truck: Truck | null, locations: Location[]  }> {
    const truckId = locationTruckId
    console.log(process.env.REST_API_URL)
    console.log("is this a valid truckID", truckId)
    console.log("is this location truckId", locationTruckId)
    // Fetch truck data
    const truckResponse = await fetch(`${process.env.REST_API_URL}/apis/truck/${truckId}`, {next: {revalidate: 0}})

    const truckResult = await truckResponse.json()
    console.log("Truck API response", truckResult)

    const truck = TruckSchema.parse(truckResult?.data)

console.log(locationTruckId)
    // Fetch locations data
    const locationsResponse = await fetch(`${process.env.REST_API_URL}/apis/location/locationTruckId/${locationTruckId}`)
    const locationsResult = await locationsResponse.json()
    console.log("Locations API response", locationsResult?.data)


    const  locations = locationsResult?.data ? LocationSchema.array().parse(locationsResult?.data) : []

    return {truck, locations}
}



