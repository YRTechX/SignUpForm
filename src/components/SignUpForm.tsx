import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
import { SignUpFormProps } from "@/utills/types";
import { useState } from "react";

const SignUpForm = ({
    currentStepIndex,
    isStepCompleted,
    isNextActive,
    stepsLength,
    isFirstStep,
    next,
    back,
    isMobile,
    data,
    updateFields,
    isLoading,
    SetLoading,
    validateStep,
    handleStepChange,
    isProgress,
}: SignUpFormProps) => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateFields = () => {
        const newErrors: { [key: string]: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (data.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
        }
        if (data.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateFields()) {
            handleStepChange(currentStepIndex, true);
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
                    isProgress={isProgress}
                />
            )}

            <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                Welcome to Chad
            </h2>

            <p className="text-gray-color mb-8 text-sm">
                Go live in 10 minutes! Our self-service widget empowers your
                customers to manage orders and track shipments 24/7 without
                driving you crazy.
            </p>

            <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <AppFormGroup label="Email">
                        <AppInput
                            type="email"
                            placeholder="megachad@trychad.com"
                            value={data.email}
                            onChange={(e) =>
                                updateFields({ email: e.target.value })
                            }
                            isError={!!errors.email}
                        />
                        {errors.email && (
                            <p className="text-red-600">{errors.email}</p>
                        )}
                    </AppFormGroup>
                    <AppFormGroup label="Your name">
                        <AppInput
                            placeholder="Mega Chad"
                            value={data.name}
                            onChange={(e) =>
                                updateFields({ name: e.target.value })
                            }
                            isError={!!errors.name}
                        />
                        {errors.name && (
                            <p className="text-red-600">{errors.name}</p>
                        )}
                    </AppFormGroup>
                    <AppFormGroup label="Password">
                        <AppInput
                            type="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={(e) =>
                                updateFields({ password: e.target.value })
                            }
                            isError={!!errors.password}
                        />
                        {errors.password && (
                            <p className="text-red-600">{errors.password}</p>
                        )}
                    </AppFormGroup>

                    <AppButton>Create account</AppButton>
                </form>
            </div>

            <div className="mt-4">
                <p className="text-center text-xs text-gray-color">
                    Already have an account?{" "}
                    <a href="#" className="text-link-color hover:opacity-80">
                        Login
                    </a>
                </p>
            </div>
        </>
    );
};

export default SignUpForm;
