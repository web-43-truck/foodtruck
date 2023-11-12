'use server'
import {NavBar} from "@/components/NavBar";
import {TruckComponent} from "../TruckView";
import {Truck, TruckSchema} from "@/utils/models/Truck"
import {Location, LocationSchema} from "@/utils/models/Location";
import {Picture, PictureSchema} from "@/utils/models/Picture";


type TruckPageProps = {
    params: { truckId: string},
}
export default async function TruckPage(props: TruckPageProps){
    console.log("line 12", props.params)
    const links = [
        {linkName: "Sign-in", href: "/"},
        {linkName: "Sign-up", href: "SignUp"},
    ]

    const {truckId} = props.params
    const locationTruckId = truckId
    console.log("location truck id line 19", locationTruckId)

    const { truck, locations, pictures } = await getData( locationTruckId )
    console.log("pictures", pictures)
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


async function getData( locationTruckId: string ): Promise<{ truck: Truck | null, locations: Location[] , pictures: Picture[] }> {
    const truckId = locationTruckId

    // Fetch truck data
    const truckResponse = await fetch(`${process.env.REST_API_URL}/apis/truck/truckId/${truckId}`, {next: {revalidate: 0}})

    const truckResult = await truckResponse.json()

    const truck = TruckSchema.parse(truckResult?.data)

    // Fetch locations data
    const locationsResponse = await fetch(`${process.env.REST_API_URL}/apis/location/locationTruckId/${locationTruckId}`)
    const locationsResult = await locationsResponse.json()

    const  locations = locationsResult?.data ? LocationSchema.array().parse(locationsResult?.data) : []

    const pictureResponse = await fetch(
        `${process.env.REST_API_URL}/apis/picture/pictureTruckId/${truckId}`, {next: {revalidate: 0}})
    const pictureResult = await pictureResponse.json()
    const pictures = pictureResult?.data ? PictureSchema.array().parse(pictureResult?.data) : []

    return {truck, locations, pictures}
}



