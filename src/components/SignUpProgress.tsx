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
    step: number;
    progress: number;
}

const SignUpProgress: React.FC<SignUpProgressProps> = (
    {
        /* step, progress */
    }
) => {
    const [step, setStep] = useState<number>(1);
    const [progress, setProgress] = useState<number>(3);
    const stepsCount = 4;

    const isStepSelected = (index: number) => index === step - 1;
    const isStepCompleted = (index: number) => index < progress;
    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const setSuccess = () => {
        setProgress(progress + 1);
    };

    const minusSuccess = () => {
        setProgress(progress - 1);
    };
    const isMobileOrTablet = window.innerWidth < 1440;
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

    const isNextActive = progress > step;
    const isBackActive = step > 1;

    const stepsText = [
        { title: "Welcome" },
        { title: "Connect your Shopify store" },
        { title: "Connect your customer support email" },
        { title: "Done" },
    ];

    return (
        <>
            {isMobileOrTablet ? (
                <MobileSignUpProgress
                    step={step}
                    progress={progress}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    stepsCount={stepsCount}
                    isNextActive={isNextActive}
                    isBackActive={isBackActive}
                />
            ) : (
                <div className="relative bg-progress-bg-gradient text-white flex flex-col justify-between p-10 basis-[40%] max-w-[568px] min-w-[450px]">
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
                    <p>step:{step}</p>
                    <p>progress:{progress}</p>
                    <AppButton onClick={prevStep}>Back</AppButton>
                    <AppButton onClick={nextStep}>Next</AppButton>
                    <AppButton onClick={setSuccess}>Success</AppButton>
                    <AppButton onClick={minusSuccess}>minus Success</AppButton>

                    <AppSlider
                        sliderContent={sliderContent}
                        sliderSettings={sliderSettings}
                    />

                    <CSSTransition
                        in={progress > 0}
                        timeout={500}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className="flex justify-between mt-5">
                            <AppButton
                                bgColor={
                                    isBackActive
                                        ? "bg-progress-handle-bg"
                                        : "transparent"
                                }
                                color={
                                    isBackActive
                                        ? "text-progress-handle-active-color"
                                        : "text-gray-color"
                                }
                                onClick={prevStep}
                                width="w-max"
                                disabled={!isBackActive}
                                icon={<ChevronLeftIcon className="w-5 h-5" />}
                                iconPosition="left"
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
                                onClick={nextStep}
                                width="w-max"
                                disabled={!isNextActive}
                                icon={<ChevronRightIcon className="w-5 h-5" />}
                                iconPosition="right"
                            >
                                Next
                            </AppButton>
                        </div>
                    </CSSTransition>
                </div>
            )}
        </>
    );
};

export default SignUpProgress;
