import React, { useEffect, useState } from "react";
import AppButton from "@/components/UI/AppButton";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckIcon,
} from "@heroicons/react/solid";

interface SignUpProgressProps {
    step: number;
    progress: number;
    stepsCount: number;
}

const MobileSignUpProgress: React.FC<SignUpProgressProps> = (
    {
        /*  step,
    progress,
    stepsCount, */
    }
) => {
    const [step, setStep] = useState<number>(1);
    const [progress, setProgress] = useState<number>(3);
    const stepsCount = 4;
    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };
    const isNextActive = progress > step;
    const isBackActive = step > 1;
    return (
        <div className="flex flex-col mb-8">
            <h2 className="text-xs mb-2 text-gray-color">
                Step {step} of {stepsCount}
            </h2>

            <div className={`relative h-2 ${progress > 0 && "mb-2"}`}>
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
                <div className="flex justify-between">
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
                        paddingX="px-2"
                        paddingY="py-1"
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
