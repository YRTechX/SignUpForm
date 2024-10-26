import React from "react";

interface AppInputProps {
    bgColor?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    placeholder?: string;
    paddingX?: string;
    paddingY?: string;
    onChange?: () => void;
    disabled?: boolean;
    type?: string;
    isError?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
    bgColor = "bg-input-bg",
    color = "text-black-color",
    fontSize = "text-sm",
    borderRadius = "rounded-md",
    paddingX = "px-4",
    paddingY = "py-2.5",
    disabled = false,
    type = "text",
    placeholder = "",
    onChange,
    isError = false,
}) => {
    return (
        <input
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={`${paddingX} ${paddingY} ${borderRadius} ${bgColor} ${color} ${fontSize} transition ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
            } ${isError ? "border border-red-600" : "border border-gray-300"}`}
        />
    );
};

export default AppInput;
