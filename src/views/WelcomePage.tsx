import React from "react";
import Welcome from "@/components/Welcome";
const WelcomePage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <Welcome />
            </div>
        </div>
    );
};

export default WelcomePage;
