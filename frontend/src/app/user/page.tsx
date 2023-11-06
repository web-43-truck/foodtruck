
import {Footer} from "@/components/Footer";
import {NavBar} from "@/components/NavBar";
import {User} from "@/app/user/user";


export default function UserPage() {
    const links = [

        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
        <User/>

        </>
    )
}