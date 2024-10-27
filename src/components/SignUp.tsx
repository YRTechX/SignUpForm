import React from "react";
import SignUpCardContent from "@/components/SignUpCardContent";
import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
const SignUp = () => {
    return (
        <div className="flex flex-1 justify-center items-center bg-sign-up">
            <SignUpCardContent
                logo={<img src={logoImage} alt="logo" />}
                logoTitle="Chad"
                title="Welcome to Chad"
                description="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
                main={
                    <form className="space-y-6">
                        <AppFormGroup label="Email">
                            <AppInput
                                type="email"
                                placeholder="megachad@trychad.com"
                            ></AppInput>
                        </AppFormGroup>
                        <AppFormGroup label="Your name">
                            <AppInput placeholder="Mega Chad"></AppInput>
                        </AppFormGroup>
                        <AppFormGroup label="Password">
                            <AppInput
                                type="password"
                                placeholder="Enter password"
                            ></AppInput>
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
    );
};

export default SignUp;
