import { CheckIcon } from "@heroicons/react/solid";
import AppButton from "@/components/UI/AppButton";
import { ResponseReceivedProps } from "@/utills/interfaces";

const ResponseReceived: React.FC<ResponseReceivedProps> = ({
    setResponse,
    handleStepChange,
    currentStepIndex,
}) => {
    const handleDoneClick = () => {
        handleStepChange(currentStepIndex, true);
        setResponse(false);
    };

    return (
        <>
            <div className="bg-green-color h-20 w-20 mb-10 rounded-full flex justify-center items-center mx-auto">
                <CheckIcon className="h-16 w-16 text-white" />
            </div>
            <p className="text-heading-color font-semibold text-xl mb-2 text-center">
                Response received
            </p>
            <p className="text-gray-color text-sm mb-4">
                Thank you for your interest in Chad! We’ll be hard at work
                building integrations to support your platform.
            </p>
            <AppButton onClick={handleDoneClick}>Done</AppButton>
        </>
    );
};

export default ResponseReceived;
