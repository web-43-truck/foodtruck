import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import TruckForm from "@/components/TruckForm";


export default function AddTruck() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <TruckForm/>
            <Footer/>
        </>
    )
}