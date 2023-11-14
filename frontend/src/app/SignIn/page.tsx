
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {SignIn} from "@/app/SignIn/signIn";


export default function SignInPage() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <section>
                <NavBar links={links}/>
            </section>
            <SignIn/>
            <Footer/>
        </>
    )
}