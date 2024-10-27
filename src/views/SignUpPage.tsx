import React, { useState } from "react";
import SignUp from "@/components/SignUp";
import SignUpProgress from "@/components/SignUpProgress";
const SignUpPage = () => {
    const [step, setStep] = useState<number>(1);
    const [progress, setProgress] = useState<number>(1);
    const stepsCount = 4;
    return (
        <>
            {/* <h2 className="text-2xl">Registration Page</h2> */}

            <SignUp step={step} progress={progress} stepsCount={stepsCount} />
        </>
    );
};

export default SignUpPage;
