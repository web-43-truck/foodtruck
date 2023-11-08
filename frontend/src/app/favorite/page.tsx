import {NavBar} from "@/components/NavBar";
import {Favorites} from "@/app/favorite/Favorites";
import {Footer} from "@/components/Footer";




export default function FavoritesPage() {
    const links = [

        {linkName: 'Home', href: '/'},

    ]

    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>

            <Favorites/>
            <Footer/>

        </>
    )
}