import React from "react";

const SignUp = () => {
    return (
        <div className="flex h-screen flex-1 justify-center items-center ">
            <div className="w-1/2 bg-white flex flex-col items-center justify-center rounded-lg shadow-card-shadow px-10 py-16">
                <h1 className="text-3xl font-semibold text-center mb-4">
                    Welcome to Chad
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Go live in 10 minutes! Our self-service widget empowers your
                    customers to manage orders and track shipments 24/7 without
                    driving you crazy.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="megachad@trychad.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Your name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mega Chad"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter password"
                        />
                    </div>

                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                        Create account
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-500">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
