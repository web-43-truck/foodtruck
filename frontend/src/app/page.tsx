import {NavBar} from "@/components/NavBar";
import 'mapbox-gl/dist/mapbox-gl.css'
import SearchBar from "@/components/SearchBar";
import SearchableList from "@/components/SearchableList";

export default function Home() {
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
          <NavBar links={links}/>
          <SearchBar onSearch={SearchableList}/>
          <SearchableList/>
        </>
    )
}



