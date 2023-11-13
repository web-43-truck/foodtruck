import {Field, Form, Formik} from "formik"
import React from "react"
import * as Yup from 'yup'


const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
})

export const ValidationSchema=() => (
        <div className="bg-grey-lighter mx-auto flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        {({ errors, touched }) => (
                            <Form>
                                <Field name="email" validate={validateEmail} />
                                {errors.email && touched.email && <div>{errors.email}</div>}

                                <Field name="password" validate={validatePassword} />
                                {errors.password && touched.password && <div>{errors.username}</div>}

                                <label
                                    className="block border border-red-light w-full p-3 rounded mb-4"

                                    placeholder="Email" htmlFor={"email"}>Email</label>

                                <label className="block border border-red-light w-full p-3 rounded mb-4"
                                       placeholder="Password"
                                       htmlFor={"password"}>Password</label>

                                <button
                                    type="button"
                                    onClick={() => validateForm().then(() => console.log('ERROR'))}
                                >
                                </button>
                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                                >Sign In</button>
                            </Form>
                        )} </div>
                </div>
        </div>)

