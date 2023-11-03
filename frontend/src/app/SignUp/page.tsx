import SignUp from "@/app/user/user"
import Form from "@/components/Form"
import {NavBar} from "@/components/NavBar";


export default function SignUpPage() {
    return(
        <>
            <NavBar{ links: LinkItem[]; }/>
            <SignUp/>
            <Form/>
        </>
    )
}