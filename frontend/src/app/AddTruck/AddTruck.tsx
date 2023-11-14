import {Formik, FormikHelpers, FormikProps} from 'formik';
import {Session} from "@/utils/FetchSession";
import {Truck} from "@/utils/models/Truck";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {ProfileSchema} from "@/utils/models/Profile";
import { Dropzone } from "dropzone";

type AddTruckProps = {
    session: Session
}

export default function AddTruck({session}:AddTruckProps) {
    const initialValues: any = {

        truckId: null,
        truckProfileId: session.profile.profileId,
        truckDescription: null,
        truckFoodCategory: '',
        truckName: '',

    }

    const handleSubmit = (values: Truck, actions: FormikHelpers<Truck>) => {
        const {setStatus, resetForm} = actions
        const result = fetch('/api/truck', {
            method: "POST",
            headers: {
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
                validationSchema={toFormikValidationSchema(ProfileSchema)}
            >
                {TruckFormContent}
            </Formik>
        </>
    )
}

function TruckFormContent(props: FormikProps<Truck>) {

    // const onDrop = useCallback(acceptedFiles => {
    //
    //     // Do something with the files
    // }, [])
    //
    // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return(
        <>

    <div className="bg-grey-lighter mx-auto flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center"></h1>

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Truck Name" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="address"
                        placeholder="Address" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                        name="description"
                        placeholder="Description" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="open"
                        placeholder="Open Time" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="close"
                        placeholder="Close Time" />

                    {/*<div {...getInputProps}>*/}
                    {/*<input {...getInputProps}*/}
                    {/*    type="file"*/}
                    {/*    className="block border border-red-light w-full p-3 rounded mb-4"*/}
                    {/*    name="upload"*/}
                    {/*    placeholder="Upload Photos" />*/}

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
                        <select id={"truckFoodCategory"} name={"truckFoodCategory"}  className="select select-bordered">
                            <option disabled value={''}>Pick one</option>
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

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                    >Save</button>

                    </div>
                </div>
            </div>
        </>
    )
}