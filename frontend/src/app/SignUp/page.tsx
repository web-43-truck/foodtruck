
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {SignUp} from "@/app/SignUp/SignUp";


export default function SignUpPage() {
    const links = [

        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}

    ]
    return(
        <>
            <section>
            <NavBar links={links}/>
            </section>
            <SignUp/>
            <Form/>
            <Footer/>
        </>
    )
}