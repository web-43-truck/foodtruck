'use client'
import React, {ReactNode} from "react"
import { Formik, FormikHelpers, FormikProps} from 'formik'

import {toFormikValidationSchema} from "zod-formik-adapter"
import {FormDebugger} from "@/components/signup/FormDebugger";
import {DisplayStatus} from "@/components/signup/DisplayStatus";
import {DisplayError} from "@/components/signup/DisplayErrors";
import {Location, LocationSchema} from "@/utils/models/Location";
import {boolean} from "zod";
import {Session} from "@/utils/FetchSession";

type AddTruckProps = {
    session: Session
}

    export default function UpdateLocation(props: UpdateLocation) {
        const {session} = props
        if (!session || !session?.profile.profileIsTruckOwner) return <></>
        const {profile,authorization} = session
        const initialValues = {


            locationAddress: '',
            locationLat: '',
            locationLng: '',
            locationSunset: '',
            locationSunrise: '',
            locationIsActive: boolean,
        }

        const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
            const {setStatus, resetForm} = actions
            const result = fetch('/apis/location', {
                method: "POST",
                headers: {
                    "authorization": authorization,
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

                                <label className="label" htmlFor="locationLat">Location</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.locationLat}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4"
                                    name="locationLat"
                                    id="locationLat"
                                    placeholder="Location Latitude"
                                />

                                <label className="label" htmlFor="locationLng">Location Longitude</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.locationLng}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                                    name="locationLng"
                                    placeholder="Location"
                                    id="locationLng"
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
                    </div>
                    <DisplayStatus status={status}/>
                </form>
                <FormDebugger {...props}/>
            </>
        )

    }
