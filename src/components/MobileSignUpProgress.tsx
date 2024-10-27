import React from "react";
import AppButton from "@/components/UI/AppButton";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckIcon,
} from "@heroicons/react/solid";

interface MobileSignUpProgressProps {
    step: number;
    progress: number;
    stepsCount: number;
    nextStep: () => void;
    prevStep: () => void;
    isNextActive: boolean;
    isBackActive: boolean;
}

const MobileSignUpProgress: React.FC<MobileSignUpProgressProps> = ({
    step,
    progress,
    stepsCount,
    nextStep,
    prevStep,
    isNextActive,
    isBackActive,
}) => {
    return (
        <div className="flex flex-col mb-8">
            <h2 className="text-xs mb-2 text-gray-color">
                Step {step} of {stepsCount}
            </h2>

            <div className="relative h-2 mb-4">
                <div className="h-[6px] border border-mobile-progress-gray absolute rounded w-full">
                    <div
                        className="h-full bg-mobile-progress-gray transition-all duration-300 ease-in-out"
                        style={{
                            width: `${(step / stepsCount) * 100}%`,
                        }}
                    />
                </div>
            </div>

            {progress > 0 && (
                <div className="flex justify-between mt-4">
                    <AppButton
                        onClick={prevStep}
                        disabled={!isBackActive}
                        bgColor="bg-transparent"
                        color={
                            isBackActive
                                ? "text-gray-color"
                                : "text-progress-btn-disabled-color"
                        }
                        fontSize="text-xs"
                        width="w-max"
                    >
                        <ChevronLeftIcon className="w-3 h-3" />
                        Prev
                    </AppButton>
                    <AppButton
                        onClick={nextStep}
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
            )}
        </div>
    );
};

export default MobileSignUpProgress;
