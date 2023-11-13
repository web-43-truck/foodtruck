'use client'
import React, {ReactNode} from "react"
import {Field, Form, Formik, FormikHelpers, FormikProps} from 'formik'
import * as Yup from 'yup'
import {toFormikValidationSchema} from "zod-formik-adapter";


export function SignUpForm() {

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
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(SignUpProfileSchema)} >
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
                    <label className="label" htmlFor="profileEmail">fullName</label>
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


// const SignupSchema = Yup.object().shape({
//     fullName: Yup.string()
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string().email('Error creating password').required('Required'),
//     confirmPassword: Yup.string().email('Error confirming password').required('Required')
// })
//
// export const ValidationSchema=() => (
//     <div className="bg-grey-lighter mx-auto flex flex-col">
//         <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//             <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//                 <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
//                 <Formik initialValues={{
//                     fullName: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 }}
//                         validationSchema={SignupSchema}
//                         onSubmit={values => {
//                             console.log(values)
//                         }}
//                     {({ errors, touched }) => (
//                         <Form>
//                             <Field name="fullName" validate={validateFullName} />
//                             {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
//                             <Field name="email" validate={validateEmail} />
//                             {errors.email && touched.email && <div>{errors.email}</div>}
//                             <Field name="email" validate={validatePassword} />
//                             {errors.password && touched.password && <div>{errors.password}</div>}
//                             <Field name="password" validate={validateConfirmPassword} />
//                             {errors.password && touched.password && <div>{errors.confirmPassword}</div>}
//                             <label className="block border border-red-light w-full p-3 rounded mb-4"
//                                    placeholder="Full Name"
//                                    htmlFor={"fullName"}>Full Name</label>
//                             <label
//                                 className="block border border-red-light w-full p-3 rounded mb-4"
//
//                                 placeholder="Email" htmlFor={"email"}>Email</label>
//
//                             <label className="block border border-red-light w-full p-3 rounded mb-4"
//                                    placeholder="Password"
//                                    htmlFor={"password"}>Password</label>
//
//                             <label className="block border border-red-light w-full p-3 rounded mb-4"
//                                    placeholder="Confirm Password"
//                                    htmlFor={"confirmpassword"}>Confirm Password</label>
//                             <button
//                                 type="button"
//                                 onClick={() => validateForm().then(() => console.log('ERROR'))}
//                             >
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
//                             >Sign In</button>
//                         </Form>
//                          )}
//                 </div>
//         </div>
//     </div>)