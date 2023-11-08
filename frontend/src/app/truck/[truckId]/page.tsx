
import {NavBar} from "@/components/NavBar";
import {Truck} from "../TruckView";

type TruckPageProps = {
    params: {truckId: string}
}
export default function TruckPage(props: TruckPageProps){
    console.log(props.params)
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <Truck key={process.env["MAPBOX_ACCESS_TOKEN"]}/>
        </>
    )
}