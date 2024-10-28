import SignIn from "@/components/SignIn";
import SignUpCard from "@/components/SignUpCard";
import AppLoading from "@/components/UI/AppLoading";
import React, { useState } from "react";

const SignInPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {isLoading && <AppLoading />}

            <div className="desktop:flex h-screen">
                <div className="flex flex-1 justify-center items-center bg-sign-up h-full">
                    <SignUpCard>
                        <SignIn setIsLoading={setIsLoading} />
                    </SignUpCard>
                </div>
            </div>
        </>
    );
};

export default SignInPage;
