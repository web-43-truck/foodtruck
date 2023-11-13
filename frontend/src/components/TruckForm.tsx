export default function TruckForm() {
    return (
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
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="open"
                        placeholder="Open" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="close"
                        placeholder="Close" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="description"
                        placeholder="Description" />

                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="food type"
                        placeholder="Food Type" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                    >Save</button>

                    </div>
                </div>
            </div>
    )
}