import React from "react";

interface AppButtonProps {
    bgColor?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    paddingX?: string;
    paddingY?: string;
    children: React.ReactNode;
    disabled?: boolean;
    width?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
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
    width = "w-full",
    onClick,
    icon,
    iconPosition = "left",
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${paddingX} ${paddingY} ${borderRadius} ${bgColor} ${color} ${fontSize} ${width} focus:outline-none transition flex items-center justify-center ${
                !disabled ? "hover:opacity-80" : ""
            }`}
        >
            {icon && iconPosition === "left" && (
                <div className="mr-2">{icon}</div>
            )}
            {children}
            {icon && iconPosition === "right" && (
                <div className="ml-2">{icon}</div>
            )}
        </button>
    );
};

export default AppButton;
