import React, { useState, useEffect, useRef } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

interface Option {
    value: string;
    label: string;
}

interface AppSelectProps {
    options: Option[];
    onChange: (option: Option) => void;
    selectedValue?: string;
    isMobile?: boolean;
    placeholder?: string;
    width?: string;
    bgColor?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    paddingX?: string;
    paddingY?: string;
    disabled?: boolean;
    border?: string;
}

const AppSelect: React.FC<AppSelectProps> = ({
    options,
    onChange,
    selectedValue,
    isMobile,
    placeholder = "Select an option",
    bgColor = "bg-input-bg",
    color = "text-black-color",
    fontSize = "text-base",
    borderRadius = "",
    paddingX = "px-4",
    paddingY = "py-2.5",
    disabled = false,
    width = "w-full",
    border = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        options.find((option) => option.value === selectedValue) || null
    );

    const selectRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    return (
        <div ref={selectRef} className={`relative ${width}`}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer ${paddingX} ${paddingY} ${borderRadius} ${bgColor} ${
                    selectedOption ? color : "text-input-placeholder-color"
                } ${fontSize} ${border}`}
            >
                {selectedOption ? selectedOption.label : placeholder}
            </div>
            {isOpen && (
                <div className={`absolute z-10 w-full ${bgColor} shadow-md`}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={`${paddingX} ${paddingY} cursor-pointer hover:opacity-50 transition`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            <span className="absolute right-2 w-4 h-4 translate-y-full top-0">
                {isOpen ? (
                    <ChevronUpIcon className="text-eye-icon-color" />
                ) : (
                    <ChevronDownIcon className="text-eye-icon-color" />
                )}
            </span>
        </div>
    );
};

export default AppSelect;
