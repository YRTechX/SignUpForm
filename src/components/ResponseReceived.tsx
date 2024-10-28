import { CheckIcon } from "@heroicons/react/solid";
import AppButton from "@/components/UI/AppButton";
import { ResponseReceivedProps } from "@/utills/interfaces";
const ResponseReceived: React.FC<ResponseReceivedProps> = ({ done }) => {
    return (
        <>
            <div className="bg-green-color h-20 w-20 mb-10">
                <CheckIcon className="h-full w-full" />
            </div>
            <p className="text-heading-color font-semibold text-xl mb-2">
                Response received
            </p>
            <p className="text-gray-color text-sm mb-4">
                Thank you for your interest in Chad! We’ll be hard at work
                building integrations to support your platform.
            </p>
            <AppButton onClick={done}>Create account</AppButton>
        </>
    );
};

export default ResponseReceived;
