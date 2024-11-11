import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "@/views/SignUpPage";
import SignInPage from "@/views/SignInPage";
import WelcomePage from "@/views/WelcomePage";
import AppButton from "@/components/UI/AppButton";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/registration" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route
                path="/"
                element={
                    <div className="text-center mt-10">
                        <h1 className="mb-4">Welcome to the App!</h1>
                        <AppButton
                            onClick={() =>
                                (window.location.href = "#/registration")
                            }
                        >
                            Register Now
                        </AppButton>
                    </div>
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
