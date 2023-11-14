import React from "react";


export default function TruckForm() {
    return (
        <div className="bg-grey-lighter mx-auto flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center"></h1>

                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.truckName}
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="fullname"
                        id="truckName"
                        placeholder="Truck Name"

                    />

                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address}
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="address"
                        placeholder="Address"
                        id="address"
                    />

                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4 h-20"
                        name="description"
                        placeholder="Description"
                        id="description"
                    />

                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.open}
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="open"
                        placeholder="Open Time"
                        id="open"
                    />

                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.close}
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="close"
                        placeholder="Close Time"
                        id="close"
                    />

                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.upload}
                        type="file"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="upload"
                        placeholder="Upload Photos"
                        id="upload"
                    />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                    >Upload Picture(s)</button>

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
    )
}