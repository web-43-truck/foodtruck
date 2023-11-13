'use client'
import React, {ReactNode} from "react"
import { Formik, FormikHelpers, FormikProps} from 'formik'
import {SignUp, SignUpSchema} from ""
import {toFormikValidationSchema} from "zod-formik-adapter"
import {FormDebugger} from "@/components/signup/FormDebugger";
import {DisplayStatus} from "@/components/signup/DisplayStatus";
import {DisplayError} from "@/components/signup/DisplayErrors";

export default function SignUpForm() {

    const initialValues : any = {
        FullName: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    }

    const handleSubmit = (values: SignUp, actions: FormikHelpers<SignUp>) => {
        const {setStatus, resetForm} = actions
        const result: Promise<void> = fetch('/api/sign-up', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
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
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema} >
                {SignUpContent}
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

    return(
        <>
            <form onSubmit={handleSubmit} className={""}>

                <div className="form-control">
                    <label className="label" htmlFor="fullName">fullName</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.fullName}
                        className="input input-bordered w-full max"
                        type="text"
                        name="fullName"
                        id="fullName"
                    />
                    <DisplayError errors={errors} touched={touched} field={"fullName"} />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="profileEmail">email</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        className="input input-bordered w-full max"
                        type="text"
                        name="email"
                        id="email"
                    />
                    <DisplayError errors={errors} touched={touched} field={"email"} />
                </div>

                <div className=" form-control">
                    <label className={" label"} htmlFor="password">Password</label>
                    <input
                        className="input input-bordered w-full max"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                        name="Password"
                        id="password"
                    />
                    <DisplayError errors={errors} touched={touched} field={"password"} />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="password">ConfirmPassword</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        className="input input-bordered w-full max"
                        type="text"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                    <DisplayError errors={errors} touched={touched} field={"password"} />
                </div>

                <div className="py-2 flex gap-2">
                    <button className='btn btn-success' type="submit">Sign Up</button>
                    <button className='btn btn-danger' onClick={handleReset} type="reset">reset</button>
                </div>
                <DisplayStatus status={status} />
            </form>
        </>
    )
}


// export default function SignUpPage() {
//     const links = [
//         {linkName: 'Home', href: '/'},
//
//     ]
//     return(
//         <>
//             <section>
//             <NavBar links={links}/>
//             </section>
//             <SignUp/>
//             <Footer/>
//         </>
//     )
// }