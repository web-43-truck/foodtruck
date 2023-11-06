
import {NavBar} from "@/components/NavBar";
import {SearchView} from "@/app/search-view/SearchView";


export default function SearchPage(){
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
            <SearchView/>
        </>
    )
}

