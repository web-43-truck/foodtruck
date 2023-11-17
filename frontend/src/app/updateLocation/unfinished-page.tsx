'use client'
import React from "react"
import { Formik, FormikHelpers, FormikProps} from 'formik'
import {ProfileSchema} from "@/utils/models/Profile";

import {toFormikValidationSchema} from "zod-formik-adapter"
import {FormDebugger} from "@/components/FormDebugger";
import {DisplayStatus} from "@/components/DisplayStatus";
import {Location, LocationSchema} from "@/utils/models/Location";
import {boolean} from "zod";
import {Session} from "@/utils/FetchSession";

type LocationFormProps = {
    session: Session}

    export default function LocationForm(props: LocationFormProps) {
    const {session} = props
    if (!session || !session?.profile.profileIsTruckOwner) return <></>
        const initialValues = {
            locationAddress: '',
            locationSunset: '',
            locationSunrise: '',
            locationIsActive: boolean,
        }




        const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
            const {setStatus, resetForm} = actions
            const result = fetch('/api/location', {
                method: "POST",
                headers: {
                    "authorization": session.authorization,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            }).then(response => response.json()).then(json => {
                let type = 'alert alert-danger'
                if (json.status === 200) {
                    resetForm()
                    type = 'alert alert-success'
                }
                setStatus({type, message: json.message})
            })
        }
        return (
            <>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={toFormikValidationSchema(LocationSchema)}>
                    {LocationFormContent}
                </Formik>
            </>
        )
    }

    function LocationFormContent(props: FormikProps<any>) {
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
                    <div className="bg-grey-lighter mx-auto flex flex-col">
                        <div
                            className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center"></h1>

                                <label className="label" htmlFor="locationAddress">Location Address</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.locationAddress}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4"
                                    name="locationAddress"
                                    id="locationAddress"
                                    placeholder="Location"
                                />



                                <label className="label" htmlFor="locationSunrise">Start Time</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.locationSunrise}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                                    name="locationSunrise"
                                    placeholder="Location Start Time"
                                    id="locationSunrise"
                                />


                                <label className="label" htmlFor="locationSunset">End Time</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.locationSunset}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                                    name="locationSunset"
                                    placeholder="Location End Time"
                                    id="locationSunset"
                                />

                                <label className="label" htmlFor="locationIsActive">Active?</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.locationIsActive}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                                    name="locationIsActive"
                                    placeholder="Location End Time"
                                    id="locationIsActive"
                                />

                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="py-2 flex gap-2 mt-2 btn btn-success"
                                    >Save</button>
                                    <button className='btn btn-danger' onClick={handleReset} type="reset">reset</button>
                                </div>
                            </div>
                        </div>

                    <DisplayStatus status={status}/>
                </form>
                <FormDebugger {...props}/>
            </>
        )

    }

