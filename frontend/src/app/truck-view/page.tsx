
import {NavBar} from "@/components/NavBar";
import {TruckView} from "./TruckView";

export default function TruckPage(){
    return(
        <>

            <TruckView key={process.env["MAPBOX_ACCESS_TOKEN"]}/>
        </>
    )
}