import {NavBar} from "@/components/NavBar";
import 'mapbox-gl/dist/mapbox-gl.css'
import { Footer } from "@/components/Footer";

export default function Home() {
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
