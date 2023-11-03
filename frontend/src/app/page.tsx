import {NavBar} from "@/components/NavBar";
import 'mapbox-gl/dist/mapbox-gl.css'
<<<<<<< HEAD
import SearchBar from "@/components/SearchBar";
=======

>>>>>>> development

export default function Home() {
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
<<<<<<< HEAD
            <NavBar/>
            <SearchBar/>
        </>


=======
        <section>
            <NavBar links={links}/>
        </section>
        </>
>>>>>>> development
    )
}



