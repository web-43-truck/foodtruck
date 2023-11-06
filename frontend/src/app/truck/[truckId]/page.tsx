
import {NavBar} from "@/components/NavBar";
import {TruckView} from "../TruckView";
import {useParams} from "next/navigation";
type TruckPageProps = {
    params: {truckId: string}
}
export default function TruckPage(props: TruckPageProps){
    console.log(props.params)

    return(
        <>
            <NavBar/>
            <TruckView key={process.env["MAPBOX_ACCESS_TOKEN"]}/>
        </>
    )
}