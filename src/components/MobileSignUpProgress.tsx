import React, { useEffect, useState } from "react";
import AppButton from "@/components/UI/AppButton";
import { CSSTransition } from "react-transition-group";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckIcon,
} from "@heroicons/react/solid";

import { MobileSignUpProgressProps } from "@/utills/interfaces";

const MobileSignUpProgress: React.FC<MobileSignUpProgressProps> = ({
    currentStepIndex,
    isNextActive,
    stepsLength,
    isFirstStep,
    next,
    back,
    isProgress,
}) => {
    return (
        <div className="flex flex-col mb-8">
            <h2 className="text-xs mb-2 text-gray-color">
                Step {currentStepIndex + 1} of {stepsLength}
            </h2>

            <div className={`relative h-2 ${isNextActive && "mb-2"}`}>
                <div className="h-[6px] border border-mobile-progress-gray absolute rounded w-full">
                    <div
                        className="h-full bg-mobile-progress-gray transition-all duration-300 ease-in-out"
                        style={{
                            width: `${
                                ((currentStepIndex + 1) / stepsLength) * 100
                            }%`,
                        }}
                    />
                </div>
            </div>

            <CSSTransition
                in={isProgress}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                <div className="flex justify-between">
                    <AppButton
                        onClick={back}
                        disabled={isFirstStep}
                        bgColor="bg-transparent"
                        color={
                            !isFirstStep
                                ? "text-gray-color"
                                : "text-progress-btn-disabled-color"
                        }
                        fontSize="text-xs"
                        width="w-max"
                        paddingX="px-2"
                        paddingY="py-1"
                    >
                        <ChevronLeftIcon className="w-3 h-3" />
                        Prev
                    </AppButton>
                    <AppButton
                        onClick={next}
                        disabled={!isNextActive}
                        bgColor="bg-transparent"
                        color={
                            isNextActive
                                ? "text-gray-color"
                                : "text-progress-btn-disabled-color"
                        }
                        fontSize="text-xs"
                        width="w-max"
                    >
                        Next
                        <ChevronRightIcon className="w-3 h-3" />
                    </AppButton>
                </div>
            </CSSTransition>
        </div>
    );
};

export default MobileSignUpProgress;
