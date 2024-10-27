import React, { useState } from "react";
import { EyeOffIcon, EyeIcon } from "@heroicons/react/outline";

interface AppInputProps {
    bgColor?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    placeholder?: string;
    paddingX?: string;
    paddingY?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    type?: string;
    isError?: boolean;
    width?: string;
    icon?: React.ReactNode;
}

const AppInput: React.FC<AppInputProps> = ({
    bgColor = "bg-input-bg",
    color = "text-black-color",
    fontSize = "text-base",
    borderRadius = "",
    paddingX = "px-4",
    paddingY = "py-2.5",
    disabled = false,
    type = "text",
    placeholder = "",
    width = "w-full",
    onChange,
    isError = false,
    icon,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    // Функция для переключения видимости пароля
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={`relative ${width}`}>
            <input
                onChange={onChange}
                type={
                    type === "password" && !showPassword ? "password" : "text"
                }
                placeholder={placeholder}
                disabled={disabled}
                className={`${paddingX} ${paddingY} ${borderRadius} ${bgColor} ${color} ${fontSize} ${width} focus:outline-none transition placeholder-gray ${
                    isError ? "border border-red-600" : "border border-input-bg"
                } ${icon || type == "password" ? "pr-8" : ""}`}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 w-5 h-5 translate-y-1/2"
                    disabled={disabled}
                >
                    {showPassword ? (
                        <EyeOffIcon className="text-eye-icon-color" />
                    ) : (
                        <EyeIcon className="text-eye-icon-color" />
                    )}
                </button>
            )}
        </div>
    );
};

export default AppInput;
