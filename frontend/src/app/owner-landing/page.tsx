import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import 'mapbox-gl/dist/mapbox-gl.css'

export default function OwnerLanding() {
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
            <NavBar links={links}/>
            <Footer/>
        </>
    )
}
