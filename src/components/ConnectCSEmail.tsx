import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
import { CheckIcon } from "@heroicons/react/solid";
type SignUpFormProps = {
    currentStepIndex: number;
    progress?: number;
    isStepCompleted?: boolean;
    isNextActive: boolean;
    isMobile: boolean;
    isFirstStep: boolean;
    stepsLength: number;
    next: () => void;
    back: () => void;
};

const ConnectCSEmail = ({
    currentStepIndex,
    isStepCompleted,
    isNextActive,
    stepsLength,
    isFirstStep,
    next,
    back,
    isMobile,
}: SignUpFormProps) => {
    return (
        <>
            <div className="flex mb-6">
                <img src={logoImage} alt="logo" />
                <div className="text-logo-color font-bold text-2xl">Chad</div>
            </div>

            {isMobile && (
                <MobileSignUpProgress
                    currentStepIndex={currentStepIndex}
                    isNextActive={isNextActive}
                    isFirstStep={isFirstStep}
                    next={next}
                    back={back}
                    stepsLength={stepsLength}
                />
            )}

            <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                Connect your customer support email
            </h2>

            <p className="text-gray-color mb-8 text-sm">
                Allows Chad to send automated responses on your behalf from your
                usual support mailbox
            </p>

            <div
                className={`${
                    isMobile && "rounded-lg p-4 bg-mobile-card-bg"
                } mb-8`}
            >
                <ul className="flex flex-col gap-4">
                    <li className="flex gap-2">
                        <div className="min-w-6 w-6 h-6 flex justify-center items-center">
                            <CheckIcon className="w-4 h-4 text-green-color" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-heading-color font-medium text-sm">
                                Contextual responses
                            </p>
                            <p className="text-gray-color text-xs">
                                Custom responses to any support situation from
                                “where’s my stuff?” to “I want a refund”
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-2">
                        <div className="min-w-6 w-6 h-6 flex justify-center items-center">
                            <CheckIcon className="w-4 h-4 text-green-color" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-heading-color font-medium text-sm">
                                Reply from anywhere
                            </p>
                            <p className="text-gray-color text-xs">
                                Respond to your customers via email or Chad
                                chat—it’s all saved in the same thread
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-2">
                        <div className="min-w-6 w-6 h-6 flex justify-center items-center">
                            <CheckIcon className="w-4 h-4 text-green-color" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-heading-color font-medium text-sm">
                                Categorical inbox tags
                            </p>
                            <p className="text-gray-color text-xs">
                                Tags your emails by category so you know what to
                                expect before even opening an email
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <AppButton>Connect store</AppButton>

            <div className="mt-4">
                <p className="text-center text-xs text-gray-color">
                    I don't use Gmail
                </p>
            </div>
        </>
    );
};

export default ConnectCSEmail;
