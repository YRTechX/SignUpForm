import React from "react";

interface AppInputProps {
    bgColor?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    placeholder?: string;
    paddingX?: string;
    paddingY?: string;
    children: React.ReactNode;
    onChange?: () => void;
    disabled?: Boolean;
    type: string;
}

const AppInput: React.FC<AppInputProps> = ({
    bgColor = "bg-input-bg",
    color = "text-black-color",
    fontSize = "text-sm",
    borderRadius = "rounded-md",
    paddingX = "px-4",
    paddingY = "py-2.5",
    children,
    disabled = false,
    type = "text",
    placeholder = "",
    onChange,
}) => {
    return (
        <input
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            {...(disabled ? { disabled: true } : {})}
            className={`${paddingX} ${paddingY} ${borderRadius} ${bgColor} ${color} ${fontSize} transition`}
        >
            {children}
        </input>
    );
};

export default AppInput;
