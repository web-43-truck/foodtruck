'use client'
import {Formik, FormikHelpers, FormikProps} from 'formik'
import {Truck, TruckSchema} from "@/utils/models/Truck";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {ProfileSchema} from "@/utils/models/Profile";
// import { Dropzone } from "dropzone";
import {DisplayStatus} from "@/components/signup/DisplayStatus";
import {FormDebugger} from "@/components/signup/FormDebugger";
import React from "react";
import {Session} from "@/utils/FetchSession";


type AddTruckProps = {
    session: Session
}

export function AddTruck(props: AddTruckProps) {
    const {session} = props
    if (!session || !session?.profile.profileIsTruckOwner) return <></>
    const {profile,authorization} = session
    const initialValues = {

        truckId: null,
        truckProfileId: profile.profileId,
        truckDescription: '',
        truckFoodCategory: '',
        truckName: '',
    }

    const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
        const {setStatus, resetForm} = actions
        const result = fetch('/apis/truck', {
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
                    validationSchema={toFormikValidationSchema(TruckSchema)}>
                    {TruckFormContent}
                </Formik>
            </>
        )
    }

    function TruckFormContent(props: FormikProps<any>) {
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

        // const onDrop = useCallback(acceptedFiles => {
        //
        //     // Do something with the files
        // }, [])
        //
        // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

        return (
            <>
                <form onSubmit={handleSubmit} className={""}>
                    <div className="bg-grey-lighter mx-auto flex flex-col">
                        <div
                            className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center"></h1>

                                <label className="label" htmlFor="truckName">Truck Name</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.truckName}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4"
                                    name="truckName"
                                    id="truckName"
                                    placeholder="Truck Name"
                                />

                                <label className="label" htmlFor="truckDescription">Description</label>
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.truckDescription}
                                    type="text"
                                    className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                                    name="truckDescription"
                                    placeholder="Description"
                                    id="truckDescription"
                                />


                                {/*<div {...getInputProps}>*/}
                                {/*<input {...getInputProps}*/}
                                {/*    type="file"*/}
                                {/*    className="block border border-red-light w-full p-3 rounded mb-4"*/}
                                {/*    name="upload"*/}
                                {/*    placeholder="Upload Photos" />*/}

                                {/*<input*/}
                                {/*    onBlur={handleBlur}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    value={values.upload}*/}
                                {/*    type="file"*/}
                                {/*    className="block border border-red-light w-full p-3 rounded mb-4"*/}
                                {/*    name="upload"*/}
                                {/*    placeholder="Upload Photos"*/}
                                {/*    id="upload"*/}
                                {/*/>*/}

                                {/*    {*/}
                                {/*        isDragActive ?*/}
                                {/*            <p>Drop the files here ...</p> :*/}
                                {/*            <p>Drag 'n' drop some files here, or click to select files</p>*/}
                                {/*    }*/}

                                {/*</div>*/}

                                {/*<button*/}
                                {/*    type="submit"*/}
                                {/*    className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"*/}
                                {/*>Upload Picture(s)</button>*/}

                                <div className="form-control  grid align-self-center px-6 md:px-0 py-6 md:py-0">
                                    <label className="label max-w-xl" htmlFor={"truckFoodCategory"}>
                                        <span className="label-text">Pick A Food Category</span>
                                    </label>
                                    <select  onBlur={handleBlur}
                                             onChange={handleChange}
                                             id={"truckFoodCategory"} name={"truckFoodCategory"}
                                            className="select select-bordered" value={values.truckFoodCategory}>
                                        <option value={''}>Pick one</option>
                                        <option value={"American"}>American</option>
                                        <option value={"Asian"}>Asian</option>
                                        <option value={"Cuban"}>Cuban</option>
                                        <option value={"French"}>French</option>
                                        <option value={"Greek"}>Greek</option>
                                        <option value={"Indian"}>Indian</option>
                                        <option value={"Italian"}>Italian</option>
                                        <option value={"Mexican"}>Mexican</option>
                                        <option value={"Other"}>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="py-2 flex gap-2 mt-2 btn btn-success"
                                    >Save</button>
                                    {/*<button className='btn btn-danger' onClick={handleReset} type="reset">reset</button>*/}
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