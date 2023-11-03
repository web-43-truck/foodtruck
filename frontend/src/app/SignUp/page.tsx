import SignUp from "@/app/user/user"
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";


export default function SignUpPage() {
    const links = [
        {linkName: 'Home', href: '/'},
    ]
    return(
        <>
            <NavBar links={links}/>
            <SignUp/>
            <Form/>
        </>
    )
}