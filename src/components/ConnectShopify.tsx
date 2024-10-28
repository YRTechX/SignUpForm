import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
import { CheckIcon } from "@heroicons/react/solid";
import AppSelect from "@/components/UI/AppSelect";
import { ConnectShopifyProps } from "@/utills/types";
import { fakeConnectShopifyAPI } from "@/utills/fakeApi";
import ResponseReceived from "@/components/ResponseReceived";
const ConnectShopify = ({
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
    SetLoading,
    SetResponse,
    isResponse,
    validateStep,
    handleStepChange,
}: ConnectShopifyProps) => {
    console.log(data);
    const platformOptions = [
        { value: "platform_1", label: "Platform 1" },
        { value: "platform_2", label: "Platform 2" },
        { value: "platform_3", label: "Platform 3" },
    ];
    const connectToShopify = async () => {
        SetLoading(true);
        /* SetResponse(true); */
        try {
            const response = await fakeConnectShopifyAPI(20);
            const { shopify_store_id, shopify_store_name } = response;

            updateFields(
                {
                    shopify_store_id,
                    shopify_store_name,
                },
                "shopify"
            );
            SetResponse(true);
        } catch (err) {
            /* setError(err.message); */
            // Обработка ошибки
        } finally {
            SetLoading(false);
        }
    };
    return (
        <>
            {isResponse ? (
                <ResponseReceived
                    handleStepChange={handleStepChange}
                    currentStepIndex={currentStepIndex}
                    setResponse={SetResponse}
                />
            ) : (
                <>
                    <div className="flex mb-6">
                        <img src={logoImage} alt="logo" />
                        <div className="text-logo-color font-bold text-2xl">
                            Chad
                        </div>
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
                    {data.shopify.shopify ? (
                        <>
                            <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                                Connect your Shopify store
                            </h2>

                            <p className="text-gray-color mb-8 text-sm">
                                Installs the Chad widget in your Shopify store
                                and sets it up to display your customers’ order
                                information and self-serve options.
                            </p>

                            <div
                                className={`${
                                    isMobile &&
                                    "rounded-lg p-4 bg-mobile-card-bg"
                                } mb-8`}
                            >
                                <ul className="flex flex-col gap-4">
                                    <li className="flex gap-2">
                                        <div className="min-w-6 w-6 h-6 flex justify-center items-center">
                                            <CheckIcon className="w-4 h-4 text-green-color" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-heading-color font-medium text-sm">
                                                Track orders and shipping
                                            </p>
                                            <p className="text-gray-color text-xs">
                                                Global coverage with 600+
                                                couriers supported
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="min-w-6 w-6 h-6 flex justify-center items-center">
                                            <CheckIcon className="w-4 h-4 text-green-color" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-heading-color font-medium text-sm">
                                                Manage orders
                                            </p>
                                            <p className="text-gray-color text-xs">
                                                Allow customers to track,
                                                return, exchange, or report
                                                problems with their orders
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="min-w-6 w-6 h-6 flex justify-center items-center">
                                            <CheckIcon className="w-4 h-4 text-green-color" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-heading-color font-medium text-sm">
                                                Process returns and exchanges
                                            </p>
                                            <p className="text-gray-color text-xs">
                                                Automatically checks your store
                                                policy and existing inventory
                                                before resolving or escalating
                                                each request
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <AppButton onClick={connectToShopify}>
                                Connect store
                            </AppButton>

                            <div className="mt-4">
                                <p
                                    className="text-center text-xs text-gray-color cursor-pointer"
                                    onClick={() =>
                                        updateFields(
                                            {
                                                shopify: false,
                                            },
                                            "shopify"
                                        )
                                    }
                                >
                                    I don't use Shopify
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                                Don’t use Shopify?
                            </h2>

                            <p className="text-gray-color mb-8 text-sm">
                                Chad Beta is currently only available on
                                Shopify. We’ll send you an email when Chad
                                becomes available on your platform.
                            </p>

                            <div>
                                <div className="space-y-6">
                                    <AppFormGroup label="Platform">
                                        <AppSelect
                                            options={platformOptions}
                                            onChange={(option) =>
                                                updateFields(
                                                    {
                                                        shopify_store_id:
                                                            option.value,
                                                        shopify_store_name:
                                                            option.label,
                                                    },
                                                    "shopify"
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
                                    Actually use Shopify?{" "}
                                    <a
                                        href="#"
                                        className="text-link-color hover:opacity-80"
                                        onClick={() =>
                                            updateFields(
                                                {
                                                    shopify: true,
                                                },
                                                "shopify"
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
            )}
        </>
    );
};

export default ConnectShopify;
