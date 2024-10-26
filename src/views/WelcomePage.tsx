import React from "react";

const Welcome = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl">
                    Hello Luna Edge, My name is [Your Name].
                </h2>
                {/* You can include any additional components here */}
            </div>
        </div>
    );
};

export default Welcome;
