import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "@/views/SignUpPage";
import SignInPage from "@/views/SignInPage";
import WelcomePage from "@/views/WelcomePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/registration" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route
                path="/"
                element={
                    <h1 className="text-center mt-10">Welcome to the App!</h1>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
