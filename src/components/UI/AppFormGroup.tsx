import React from "react";

interface AppFormGroupProps {
    label?: string;
    error?: string;
    children: React.ReactNode;
}

const AppFormGroup: React.FC<AppFormGroupProps> = ({
    label,
    error,
    children,
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="block mb-2 text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            {children}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default AppFormGroup;
