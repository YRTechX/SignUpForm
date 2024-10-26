import React from "react";
import SignUpCardContent from "@/components/SignUpCardContent";
import logoImage from "@/assets/images/chadLogo.png";

const SignUp = () => {
    return (
        <div className="flex h-screen flex-1 justify-center items-center bg-sign-up">
            <SignUpCardContent
                logo={<img src={logoImage} alt="logo" />}
                logoTitle="Chad"
                title="Welcome to Chad"
                description="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
                main={
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
                }
                footer={
                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-500">
                            Login
                        </a>
                    </p>
                }
            />
        </div>
    );
};

export default SignUp;
