import {NavBar} from "@/components/NavBar";
import 'mapbox-gl/dist/mapbox-gl.css'


export default function Home() {
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
        </>
    )
}