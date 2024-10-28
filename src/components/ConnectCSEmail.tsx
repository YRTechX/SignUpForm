import logoImage from "@/assets/images/chadLogo.png";
import googleIcon from "@/assets/images/googleIcon.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
import { CheckIcon } from "@heroicons/react/solid";
import AppSelect from "@/components/UI/AppSelect";
import { fakeConnectGoogleAPI } from "@/utills/fakeApi";
import { ConnectCSEmailData } from "@/utills/types";

const ConnectCSEmail = ({
    currentStepIndex,
    isStepCompleted,
    isNextActive,
    stepsLength,
    isFirstStep,
    next,
    back,
    isMobile,
    updateFields,
    data,
    isLoading,
    loading,
    response,
    isResponse,
}: ConnectCSEmailData) => {
    const platformOptions = [
        { value: "platform_1", label: "Platform email 1" },
        { value: "platform_2", label: "Platform email 2" },
        { value: "platform_3", label: "Platform email 3" },
    ];
    const connectToGoogle = async () => {
        loading(true);
        /* setError(null); */
        try {
            const response = await fakeConnectGoogleAPI(20);
            updateFields(
                {
                    gmail_address: response,
                },
                "customer_support_email"
            );
        } catch (err) {
            /* setError(err.message); */
        } finally {
            loading(false);
        }
    };
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
            {data.customer_support_email.gmail ? (
                <>
                    <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                        Connect your customer support email
                    </h2>

                    <p className="text-gray-color mb-8 text-sm">
                        Allows Chad to send automated responses on your behalf
                        from your usual support mailbox
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
                                        Custom responses to any support
                                        situation from “where’s my stuff?” to “I
                                        want a refund”
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
                                        Respond to your customers via email or
                                        Chad chat—it’s all saved in the same
                                        thread
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
                                        Tags your emails by category so you know
                                        what to expect before even opening an
                                        email
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <AppButton
                        bgColor="bg-btn-google-bg"
                        borderRadius="rounded-[1px]"
                        fontWeight="font-medium"
                        paddingX="px-[1px]"
                        paddingY="py-[1px]"
                        iconPosition="left"
                        icon={
                            <img
                                src={googleIcon}
                                className="w-[18px] h-[18px]"
                            />
                        }
                        iconBgClasses="flex h-12 w-12 bg-white justify-center items-center rounded-sm"
                        onClick={connectToGoogle}
                    >
                        Connect Gmail Account
                    </AppButton>

                    <div className="mt-4">
                        <p
                            className="text-center text-xs text-gray-color cursor-pointer"
                            onClick={() =>
                                updateFields(
                                    {
                                        gmail: false,
                                    },
                                    "customer_support_email"
                                )
                            }
                        >
                            I don't use Gmail
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                        Don’t use Gmail?
                    </h2>

                    <p className="text-gray-color mb-8 text-sm">
                        Chad Beta is currently only integrated with Gmail. We’ll
                        send you an email when Chad becomes compatible with your
                        support ticket platform.
                    </p>

                    <div>
                        <div className="space-y-6">
                            <AppFormGroup label="Platform">
                                <AppSelect
                                    options={platformOptions}
                                    onChange={(option) =>
                                        updateFields(
                                            {
                                                non_gmail_platform_id:
                                                    option.value,
                                                non_gmail_platform_name:
                                                    option.label,
                                            },
                                            "customer_support_email"
                                        )
                                    }
                                    borderRadius="rounded"
                                    placeholder="Select platform"
                                ></AppSelect>
                            </AppFormGroup>
                            <AppButton>Submit</AppButton>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-center text-xs text-gray-color">
                            Actually use Gmail?{" "}
                            <a
                                href="#"
                                className="text-link-color hover:opacity-80"
                                onClick={() =>
                                    updateFields(
                                        {
                                            gmail: true,
                                        },
                                        "customer_support_email"
                                    )
                                }
                            >
                                Connect
                            </a>
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default ConnectCSEmail;
