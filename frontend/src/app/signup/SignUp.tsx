import Form from "@/components/Form"
import React, {ReactNode} from "react"
import { Formik } from 'formik'
import {SearchItem} from "@/components/SearchItem";
import {Picture} from "@/components/Picture";
import CheckBox from "@/components/checkbox";
import CheckBoxTruck from "@/components/checkboxTruck";




export function SignUp() {
    return (
        <>
            <div className="bg-grey-lighter mx-auto flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <Formik initialValues={{
                fullname: '',
                email: '',
                password: '',
                confirmpassword: ''
            }}
                    onSubmit={async (values) => {
                    alert(JSON.stringify(values, null))
            }}
                {({ isSubmitting }) => (
                   <Form>
                        <label
                               className="block border border-red-light w-full p-3 rounded mb-4"

                               placeholder="Full Name" htmlFor={"fullName"}>Full Name</label>

                        <label
                            className="block border border-red-light w-full p-3 rounded mb-4"

                            placeholder="Email" htmlFor={"email"}>Email</label>

                       <label className="block border border-red-light w-full p-3 rounded mb-4"
                              placeholder="Password"
                              htmlFor={"password"}>Password</label>

                       <label className="block border border-red-light w-full p-3 rounded mb-4"
                              placeholder="Confirm Password"
htmlFor={"confirmpassword"}>Confirm Password</label>
                       <button
                           type="submit" disabled = {isSubmitting}
                           className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                       >Create Account</button>
                   </Form>)}
                    )}
                    </Formik>
                </div>
                <>

