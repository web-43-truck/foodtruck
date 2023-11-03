import SignUp from "@/app/user/user"
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";


export default function SignUpPage() {
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]
    return(
        <>
            <NavBar links={links}/>
            <SignUp/>
            <Form/>
        </>
    )
}