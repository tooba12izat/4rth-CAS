
import React from "react";
import { createAction } from "@/app/actions/action";


const Register = () => {
  

    return (
        <>

            <div className="flex min-h-screen flex-col items-center justify-between p-14">
                <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                    <h1 className="heading">REGISTER</h1>
                    <form action={createAction} >
                        {/* <label className="input-label">Full Name</label> */}
                        <input
                            type="text"
                            className="input-field"
                            placeholder="full name"
                            required
                            name="name"
                        />
                        {/* <label className="input-label">Country</label> */}
                        <input
                            type="text"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                            placeholder="country name"
                            required
                            name="country"
                        />
                        {/* <label className="input-label">Class</label> */}
                        <input
                            type="text"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                            placeholder="class"
                            required
                            name="category"
                        />
                         {/* <label className="input-label">Sail number</label> */}
                        <input
                            type="text"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                            placeholder="sail no"
                            required
                            name="sailno"
                        />
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            REGISTER
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register;