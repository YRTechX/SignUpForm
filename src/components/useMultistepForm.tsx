import { ReactElement, useState } from "react";

interface Progress {
    [key: number]: boolean;
}

export function useMultistepForm(steps: ((props: any) => ReactElement)[]) {
    const initializeProgress = (): Progress => {
        const progressObj: Progress = {};
        steps.forEach((_, index) => {
            progressObj[index] = false;
        });
        return progressObj;
    };

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [progress, setProgress] = useState<Progress>(initializeProgress);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isResponse, setResponse] = useState<boolean>(false);

    const isStepCompleted = (index: number) => !!progress[index];
    function SetLoading(loadingState: boolean) {
        setLoading(loadingState);
    }
    function SetResponse(responseState: boolean) {
        setLoading(responseState);
    }
    function next() {
        setCurrentStepIndex((i) => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        });
    }

    function back() {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        });
    }

    function goTo(index: number) {
        setCurrentStepIndex(index);
    }

    function validateStep(index: number, isValid: boolean) {
        setProgress((prevProgress) => ({
            ...prevProgress,
            [index]: isValid,
        }));
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        stepsLength: steps.length,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        isNextActive:
            currentStepIndex === steps.length - 1 &&
            progress[currentStepIndex + 1],
        goTo,
        next,
        back,
        progress,
        validateStep,
        isStepCompleted,
        SetLoading,
        isLoading,
        SetResponse,
        isResponse,
    };
}
