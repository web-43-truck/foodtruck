import SignUp from "@/app/user/user"
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";


export default function SignUpPage() {
    const links = [
        {linkName: 'Home', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <NavBar links={links}/>
            <SignUp/>
            <Form/>
            <Footer/>
        </>
    )
}