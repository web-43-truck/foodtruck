import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {SignUp} from "@/app/SignUp/SignUp";
import {EditTrucksGrid} from "@/components/ViewEditTrucks";


function ViewEditTrucks() {
    return null;
}

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
            <ViewEditTrucks/>
            <Footer/>
        </>
    )
}