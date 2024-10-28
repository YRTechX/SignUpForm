import React, { useEffect, useState } from "react";
import AppButton from "@/components/UI/AppButton";
import AppSlider from "@/components/UI/AppSlider";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckIcon,
} from "@heroicons/react/solid";
import { CSSTransition } from "react-transition-group";

interface SignUpProgressProps {
    currentStepIndex: number;
    isStepCompleted: (index: number) => boolean;
    isNextActive: boolean;
    isFirstStep: boolean;
    next: () => void;
    back: () => void;
}

const SignUpProgress: React.FC<SignUpProgressProps> = ({
    currentStepIndex,
    isStepCompleted,
    isNextActive,
    isFirstStep,
    next,
    back,
}) => {
    const isStepSelected = (index: number) => index === currentStepIndex;

    const sliderContent = [
        {
            id: 1,
            content: (
                <div className="flex gap-4 text-form-info-color items-center">
                    <span className="font-bold text-3xl">5X</span>
                    <p className="text-center text-sm text-form-info-color">
                        Acquiring a new customer is 5x more costly than making
                        an unhappy customer happy.
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="flex gap-4 text-form-info-color items-center">
                    <span className="font-bold text-3xl">5X</span>
                    <p className="text-center text-sm text-form-info-color">
                        Acquiring a new customer is 5x more costly than making
                        an unhappy customer happy.
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="flex gap-4 text-form-info-color items-center">
                    <span className="font-bold text-3xl">5X</span>
                    <p className="text-center text-sm text-form-info-color">
                        Acquiring a new customer is 5x more costly than making
                        an unhappy customer happy.
                    </p>
                </div>
            ),
        },
    ];

    const sliderSettings = {
        arrows: false,
    };

    const stepsText = [
        { title: "Welcome" },
        { title: "Connect your Shopify store" },
        { title: "Connect your customer support email" },
        { title: "Done" },
    ];

    return (
        <div className="relative bg-progress-bg-gradient text-white flex flex-col justify-between px-[102px] py-14 basis-[40%] max-w-[568px] min-w-[450px]">
            <div className="flex-1 flex flex-col justify-center gap-y-12">
                <ul className="space-y-12">
                    {stepsText.map((stepData, index) => (
                        <li
                            key={index}
                            className={`relative flex-1 ${
                                index !== stepsText.length - 1
                                    ? "after:content-[''] after:w-0.5 after:h-[calc(100%+16px)] after:inline-block after:absolute after:left-[15px]"
                                    : ""
                            } ${
                                isStepCompleted(index)
                                    ? "after:bg-button-bg"
                                    : "after:bg-form-color"
                            }`}
                        >
                            <a className="flex items-center w-full">
                                <span
                                    className={`relative flex justify-center items-center w-8 h-8 mr-4 text-sm rounded-full border-2${
                                        isStepCompleted(index)
                                            ? "bg-button-bg text-form-color border-button-bg"
                                            : ""
                                    } ${
                                        isStepSelected(index)
                                            ? "text-form-color border-button-bg"
                                            : ""
                                    } ${
                                        isStepSelected(index) &&
                                        isStepCompleted(index)
                                            ? "text-form-color border-button-bg bg-button-bg outline outline-3 outline-form-bg"
                                            : ""
                                    } ${
                                        !isStepSelected(index) &&
                                        !isStepCompleted(index)
                                            ? "border-form-color"
                                            : ""
                                    } ${
                                        !isStepSelected(index) &&
                                        isStepCompleted(index)
                                            ? "bg-button-bg border-button-bg"
                                            : ""
                                    }`}
                                >
                                    {isStepCompleted(index) ? (
                                        <CheckIcon className="w-4 h-4 text-white" />
                                    ) : null}

                                    <span
                                        className={`absolute inset-0 flex items-center justify-center ${
                                            isStepSelected(index) &&
                                            isStepCompleted(index)
                                                ? "before:content-[''] before:absolute before:w-10 before:h-10 before:rounded-full before:border-[1.5px] before:border-button-bg"
                                                : ""
                                        }`}
                                    ></span>
                                </span>

                                <div className="block">
                                    <h4
                                        className={`text-md ${
                                            isStepCompleted(index) ||
                                            isStepSelected(index)
                                                ? "text-white"
                                                : "text-form-color"
                                        } ${
                                            isStepSelected(index)
                                                ? "font-medium"
                                                : ""
                                        }`}
                                    >
                                        {stepData.title}
                                    </h4>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <CSSTransition
                    in={isNextActive}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="flex justify-between mt-5">
                        <AppButton
                            bgColor={
                                !isFirstStep
                                    ? "bg-progress-handle-bg"
                                    : "transparent"
                            }
                            color={
                                !isFirstStep
                                    ? "text-progress-handle-active-color"
                                    : "text-gray-color"
                            }
                            onClick={back}
                            width="w-max"
                            disabled={isFirstStep}
                            icon={<ChevronLeftIcon className="w-5 h-5" />}
                            iconPosition="left"
                            borderRadius="rounded"
                            paddingX="px-4"
                            paddingY="py-[6px]"
                            fontSize="text-base"
                        >
                            Back
                        </AppButton>
                        <AppButton
                            bgColor={
                                isNextActive
                                    ? "bg-progress-handle-bg"
                                    : "transparent"
                            }
                            color={
                                isNextActive
                                    ? "text-progress-handle-active-color"
                                    : "text-gray-color"
                            }
                            onClick={next}
                            width="w-max"
                            disabled={!isNextActive}
                            icon={<ChevronRightIcon className="w-5 h-5" />}
                            iconPosition="right"
                            borderRadius="rounded"
                            paddingX="px-4"
                            paddingY="py-[6px]"
                            fontSize="text-base"
                        >
                            Next
                        </AppButton>
                    </div>
                </CSSTransition>
            </div>
            <AppSlider
                sliderContent={sliderContent}
                sliderSettings={sliderSettings}
            />
        </div>
    );
};

export default SignUpProgress;
