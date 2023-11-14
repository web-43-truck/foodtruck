

export default function SignInForm() {
    return (
        <div className="bg-grey-lighter mx-auto flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign in to Truck Hunter</h1>


                    <input
                        type="text"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="Email"
                        placeholder="Email"/>

                    <input
                        type="password"
                        className="block border border-red-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"/>


                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black hover:bg-blue-dark focus:outline-none my-1"
                    >Sign In
                    </button>

                </div>


            </div>
        </div>
    )
}