import React, { useEffect, useState } from "react";
import { useMultistepForm } from "@/components/useMultistepForm";
import SignUpProgress from "@/components/SignUpProgress";
import SignUpCard from "@/components/SignUpCard";
import SignUpForm from "@/components/SignUpForm";
import ConnectShopify from "@/components/ConnectShopify";
import ConnectCSEmail from "@/components/ConnectCSEmail";
import { FormData } from "@/utills/interfaces";
import AppLoading from "@/components/UI/AppLoading";
const INITIAL_DATA: FormData = {
    email: "",
    name: "",
    password: "",
    shopify: {
        shopify: true,
        shopify_store_id: "",
        shopify_store_name: "",
        non_shopify_platform_id: "",
        non_shopify_platform_name: "",
    },
    customer_support_email: {
        gmail: true,
        gmail_address: "",
        non_gmail_platform_id: "",
        non_gmail_platform_name: "",
    },
};

const SignUp = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
    const [data, setData] = useState(INITIAL_DATA);
    const updateFields = (fields: Partial<FormData>, path?: string) => {
        console.log("fields", fields, "path", path);
        setData((prev: FormData) => {
            const newData: FormData = { ...prev };

            if (path) {
                const keys = path.split(".");
                let current: any = newData;

                for (let i = 0; i < keys.length - 1; i++) {
                    const key = keys[i];

                    if (!current[key]) {
                        current[key] = {};
                    }

                    current = current[key];
                }

                const lastKey = keys[keys.length - 1];

                Object.keys(fields).forEach((fieldKey) => {
                    current[lastKey] = {
                        ...(current[lastKey] || {}),
                        ...fields,
                    };
                });
            } else {
                Object.assign(newData, fields);
            }

            console.log("newData", newData);
            return newData;
        });
    };

    const {
        currentStepIndex,
        step,
        isStepCompleted,
        isFirstStep,
        isNextActive,
        stepsLength,
        next,
        back,
        isLoading,
        SetLoading,
        isResponse,
        SetResponse,
        validateStep,
    } = useMultistepForm([
        (props) => <SignUpForm {...props} updateFields={updateFields} />,
        (props) => <ConnectShopify {...props} updateFields={updateFields} />,
        (props) => <ConnectCSEmail {...props} updateFields={updateFields} />,
        (props) => <div>Step 4 Content</div>,
    ]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1440);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isLoading && <AppLoading />}

            <div className="desktop:flex h-screen">
                {!isMobile && (
                    <SignUpProgress
                        currentStepIndex={currentStepIndex}
                        isStepCompleted={isStepCompleted}
                        isNextActive={isNextActive}
                        isFirstStep={isFirstStep}
                        next={next}
                        back={back}
                    />
                )}

                <div className="flex flex-1 justify-center items-center bg-sign-up h-full">
                    <SignUpCard>
                        {step({
                            isMobile,
                            currentStepIndex,
                            next,
                            back,
                            isNextActive,
                            isFirstStep,
                            stepsLength,
                            data,
                            isLoading,
                            isResponse,
                            SetLoading,
                            SetResponse,
                            validateStep,
                        })}
                    </SignUpCard>
                </div>
            </div>
        </>
    );
};

export default SignUp;
