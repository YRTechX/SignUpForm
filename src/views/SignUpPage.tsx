import React, { useState } from "react";
import SignUp from "@/components/SignUp";
import SignUpProgress from "@/components/SignUpProgress";
const SignUpPage = () => {
    const [step, setStep] = useState<number>(1);
    const [progress, setProgress] = useState<number>(1);
    return (
        <>
            {/* <h2 className="text-2xl">Registration Page</h2> */}

            <div className="desktop:flex h-screen">
                <SignUpProgress
                    step={step}
                    progress={progress}
                ></SignUpProgress>
                <SignUp />
            </div>
        </>
    );
};

export default SignUpPage;
