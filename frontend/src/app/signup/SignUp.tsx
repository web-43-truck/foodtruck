import Form from "@/components/Form"
import React, {ReactNode} from "react"
import { Formik } from 'formik'




export function SignUp() {
    return (
        <>
            <Formik initialValues={{
                toggle: false,
                checked: []
            }} onSubmit={async (values) => {
                alert(JSON.stringify(values))
            }}>
            <Form/>
            </Formik>

        </>
    )
}