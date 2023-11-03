import User from "@/app/user/user";
import {Footer} from "@/components/Footer";
import {NavBar} from "@/components/NavBar";


export default function UserPage() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'},
]
    return(
        <>
            <NavBar links={links}/>
        <User/>
            <Footer/>
        </>
    )
}