import CheckBoxTruck from "@/components/checkboxTruck";
import {Form, Formik} from "formik"
import React from "react"

export default function SignInForm() {
    return (
        <div className="bg-grey-lighter mx-auto flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }}
                        onSubmit ={async (values) => {
                            alert(JSON.stringify(values, null))
                        }}
                    {({isSubmitting}) => (
                        <Form>
                            <label
                                className="block border border-red-light w-full p-3 rounded mb-4"

                                placeholder="Email" htmlFor={"email"}>Email</label>

                            <label className="block border border-red-light w-full p-3 rounded mb-4"
                                   placeholder="Password"
                                   htmlFor={"password"}>Password</label>
                            <button
                                type="submit" disabled = {isSubmitting}
                                className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                            >Sign In</button>
                        </Form>
                    )}



                </div>


            </div>
        </div>
    )
}