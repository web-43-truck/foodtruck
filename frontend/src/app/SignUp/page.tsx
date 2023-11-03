import SignUp from "@/app/user/user"
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";


export default function SignUpPage() {
    const links = [
<<<<<<< HEAD
        {linkName: 'Home', href: '/'},
=======
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
>>>>>>> development
    ]
    return(
        <>
            <NavBar links={links}/>
            <SignUp/>
            <Form/>
        </>
    )
}