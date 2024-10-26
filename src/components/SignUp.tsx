import React from "react";

const SignupPage = () => {
    return (
        <div className="flex h-screen">
            {/* Левая часть */}
            <div className="w-1/2 bg-form-bg text-white flex flex-col justify-between p-10">
                {/* Процесс */}
                <div>
                    <ol className="space-y-4 text-lg">
                        <li className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-900">
                                1
                            </span>
                            <span className="ml-4">Welcome</span>
                        </li>
                        <li className="flex items-center opacity-50">
                            <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                2
                            </span>
                            <span className="ml-4">
                                Connect your Shopify store
                            </span>
                        </li>
                        <li className="flex items-center opacity-50">
                            <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                3
                            </span>
                            <span className="ml-4">
                                Connect your customer support email
                            </span>
                        </li>
                        <li className="flex items-center opacity-50">
                            <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                4
                            </span>
                            <span className="ml-4">Done</span>
                        </li>
                    </ol>
                </div>

                {/* Секция с текстом */}
                <div className="text-3xl text-center">
                    <p className="text-white">
                        <strong>5X</strong>
                    </p>
                    <p className="text-white opacity-70 text-sm">
                        Acquiring a new customer is 5x more costly than making
                        an unhappy customer happy
                    </p>
                </div>
            </div>

            {/* Правая часть */}
            <div className="w-1/2 bg-white flex items-center justify-center">
                <div className="w-3/4">
                    <h1 className="text-3xl font-semibold text-center mb-4">
                        Welcome to Chad
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Go live in 10 minutes! Our self-service widget empowers
                        your customers to manage orders and track shipments 24/7
                        without driving you crazy.
                    </p>

                    {/* Форма */}
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
        </div>
    );
};

export default SignupPage;
