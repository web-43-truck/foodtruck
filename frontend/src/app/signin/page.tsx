'use client'


import {Field, Form, Formik, FormikHelpers, FormikProps} from "formik"
import {toFormikValidationSchema} from "zod-formik-adapter"
import {SignIn, SignInSchema} from "@/apis/signin"
import React from "react"
import {FormDebugger} from "@/components/formDebugger"
import {DisplayError} from "@/components/signup/DisplayErrors";
import {DisplayStatus} from "@/components/signup/DisplayStatus";




export default function SignInFormComponent() {

    const initialValues : any = {
        profileEmail: '',
        profilePassword: ''
    }

    const handleSubmit = (values: SignIn, actions: FormikHelpers<SignIn>) => {
        const {setStatus, resetForm} = actions
        const result = fetch('/api/sign-in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        }).then(response => response.json()).then(json => {
            let type = 'ALERT'
            if(json.status === 200) {
                resetForm()
                type = 'success'
            }
            setStatus({type, message: json.message})
        })
    }
    return(
        <>
            <h1 className="text-3xl pb-0 font-bold">Sign In</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={toFormikValidationSchema(SignInSchema)}
            >
                {SignInFormContent}
            </Formik>

        </>
    )
}

function SignInFormContent(props: FormikProps<SignIn>) {

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
                    <label className="label" htmlFor="profileEmail">email</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileEmail}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileEmail"
                        id="profileEmail"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"} />
                </div>
                <div className=" form-control">
                    <label className={" label"} htmlFor="password">Password</label>
                    <input
                        className="input input-bordered w-full max"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profilePassword}
                        type="password"
                        name="profilePassword"
                        id="password"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"} />
                </div>
                <div className="py-2 flex gap-2">
                    <button className='btn btn-success' type="submit">Sign In</button>
                    <button className='btn btn-danger' onClick={handleReset} type="reset">reset</button>
                </div>
                <DisplayStatus status={status} />
            </form>
            <FormDebugger {...props}/>
        </>
    )
}




// const SignupSchema = Yup.object().shape({
//     fullName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
// })
//
// export const ValidationSchema=() => (
//         <div className="bg-grey-lighter mx-auto flex flex-col">
//             <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//                 <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//                     <h1 className="mb-8 text-3xl text-center">Sign In</h1>
//                     <Formik initialValues={{
//                         email: '',
//                         password: ''
//                     }}
//                             validationSchema={SignupSchema}
//                             onSubmit={values => {
//                                 console.log(values)
//                             }}
//                         {({ errors, touched }) => (
//                             <Form>
//                                 <Field name="email" validate={validateEmail} />
//                                 {errors.email && touched.email && <div>{errors.email}</div>}
//
//                                 <Field name="password" validate={validatePassword} />
//                                 {errors.password && touched.password && <div>{errors.username}</div>}
//
//                                 <label
//                                     className="block border border-red-light w-full p-3 rounded mb-4"
//
//                                     placeholder="Email" htmlFor={"email"}>Email</label>
//
//                                 <label className="block border border-red-light w-full p-3 rounded mb-4"
//                                        placeholder="Password"
//                                        htmlFor={"password"}>Password</label>
//
//                                 <button
//                                     type="button"
//                                     onClick={() => validateForm().then(() => console.log('ERROR'))}
//                                 >
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
//                                 >Sign In</button>
//                             </Form>
//                         )} </div>
//                 </div>
//         </div>)

