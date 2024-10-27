import React, { useEffect, useState } from "react";
import SignUpCardContent from "@/components/SignUpCardContent";
import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
import SignUpProgress from "@/components/SignUpProgress";

interface SignUpProps {
    step: number;
    progress: number;
    stepsCount: number;
}

const SignUp: React.FC<SignUpProps> = ({ step, progress, stepsCount }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

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
        <div className="desktop:flex h-screen">
            {!isMobile && (
                <SignUpProgress
                    step={step}
                    progress={progress}
                    stepsCount={stepsCount}
                />
            )}

            <div className="flex flex-1 justify-center items-center bg-sign-up h-full">
                <SignUpCardContent
                    logo={<img src={logoImage} alt="logo" />}
                    logoTitle="Chad"
                    progressBar={
                        isMobile ? (
                            <MobileSignUpProgress
                                step={step}
                                progress={progress}
                                stepsCount={stepsCount}
                            />
                        ) : null
                    }
                    title="Welcome to Chad"
                    description="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
                    main={
                        <form className="space-y-6">
                            <AppFormGroup label="Email">
                                <AppInput
                                    type="email"
                                    placeholder="megachad@trychad.com"
                                />
                            </AppFormGroup>
                            <AppFormGroup label="Your name">
                                <AppInput placeholder="Mega Chad" />
                            </AppFormGroup>
                            <AppFormGroup label="Password">
                                <AppInput
                                    type="password"
                                    placeholder="Enter password"
                                />
                            </AppFormGroup>

                            <AppButton>Create account</AppButton>
                        </form>
                    }
                    footer={
                        <p className="text-center text-xs text-gray-color">
                            Already have an account?{" "}
                            <a
                                href="#"
                                className="text-link-color hover:opacity-80"
                            >
                                Login
                            </a>
                        </p>
                    }
                />
            </div>
        </div>
    );
};

export default SignUp;
