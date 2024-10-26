import React from "react";

interface AppButtonProps {
    bgColor?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    paddingX?: string;
    paddingY?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: Boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
    bgColor = "bg-button-bg",
    color = "text-white",
    fontSize = "text-sm",
    borderRadius = "rounded-lg",
    paddingX = "px-5",
    paddingY = "py-3",
    children,
    disabled = false,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`${paddingX} ${paddingY} ${borderRadius} ${bgColor} ${color} ${fontSize} focus:outline-none ${disabled} hover:opacity-80 transition`}
        >
            {children}
        </button>
    );
};

export default AppButton;
