import React from "react";

// Интерфейс для пропсов
interface SignUpCardContentProps {
    logo?: React.ReactNode;
    logoTitle?: String;
    title?: React.ReactNode;
    description?: React.ReactNode;
    main?: React.ReactNode;
    footer?: React.ReactNode;
}

// Компонент с типизированными пропсами
const SignUpCardContent: React.FC<SignUpCardContentProps> = ({
    logo,
    logoTitle,
    title,
    description,
    main,
    footer,
}) => {
    return (
        <div className="w-1/2 bg-white flex flex-col justify-center rounded-lg shadow-card-shadow px-10 py-16">
            {/* Проверяем, передан ли логотип */}
            {logo && (
                <div className="flex mb-6">
                    {logo}
                    {logoTitle && (
                        <div className="text-logo-color font-bold text-2xl">
                            {logoTitle}
                        </div>
                    )}
                </div>
            )}

            {/* Проверяем, передан ли заголовок */}
            {title && (
                <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                    {title}
                </h2>
            )}

            {/* Проверяем, передано ли описание */}
            {description && (
                <p className="text-center text-gray-color mb-8 text-sm">
                    {description}
                </p>
            )}

            {/* Проверяем, передан ли основной контент */}
            {main && <div>{main}</div>}

            {/* Проверяем, передан ли футер */}
            {footer && <div className="mt-4">{footer}</div>}
        </div>
    );
};

export default SignUpCardContent;
