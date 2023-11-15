'use client'
import React, {ReactNode} from "react"
import { Formik, FormikHelpers, FormikProps} from 'formik'

import {toFormikValidationSchema} from "zod-formik-adapter"
import {FormDebugger} from "@/components/signup/FormDebugger";
import {DisplayStatus} from "@/components/signup/DisplayStatus";
import {DisplayError} from "@/components/signup/DisplayErrors";
import {SignUp, SignUpSchema} from "@/utils/models/SignUp";

export default function SignUp() {

    const initialValues : SignUp = {
        profileName: '',
        profileEmail: '',
        profilePassword: '',
        profilePasswordConfirm: ''
    }

    const handleSubmit = (values: SignUp, actions: FormikHelpers<SignUp>) => {
        const submitValues = {...values, profileId: null, profileActivationToken: null, profileIsTruckOwner: false}
        const {setStatus, resetForm} = actions
        const result: Promise<void> = fetch('/apis/sign-up', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submitValues)
        }).then(response => response.json()).then(json => {
            let type = 'ERROR'
            if(json.status === 200) {
                resetForm()
                type = 'SUCCESS'
            }
            setStatus({type, message: json.message})
        })
    }
    return(
        <>
            <h1 className="text-3xl pb-0 font-bold">Sign Up</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(SignUpSchema)} >
                {SignUp}
            </Formik>
        </>
    )
}

function SignUpContent(props: FormikProps<SignUp>) {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

    return (
        <>
            <form onSubmit={handleSubmit} className={""}>

                <div className="form-control">
                    <label className="label" htmlFor="profileName">Full Name</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileName}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileName"
                        id="profileName"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profileName"}/>
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="profileEmail">Email</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileEmail}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileEmail"
                        id="profileEmail"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
                </div>

                <div className=" form-control">
                    <label className={" label"} htmlFor="profilePassword">Password</label>
                    <input
                        className="input input-bordered w-full max"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profilePassword}
                        type="password"
                        name="profilePassword"
                        id="profilePassword"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="profilePassword">Password Confirm</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profilePasswordConfirm}
                        className="input input-bordered w-full max"
                        type="password"
                        name="profilePasswordConfirm"
                        id="profilePasswordConfirm"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                </div>

                <div className="py-2 flex gap-2">
                    <button className='btn btn-success' type="submit">Sign Up</button>
                    <button className='btn btn-danger' onClick={handleReset} type="reset">reset</button>
                </div>
                <DisplayStatus status={status}/>
            </form>
            <FormDebugger {...props}/>
        </>
    )
}