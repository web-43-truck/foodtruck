import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {EditTrucksGrid} from "@/components/EditTrucksGrid";

export default function OwnerView() {
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <EditTrucksGrid/>
            <Footer/>
        </>
    )
}
