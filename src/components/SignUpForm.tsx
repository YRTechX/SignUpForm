import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import MobileSignUpProgress from "@/components/MobileSignUpProgress";
type UserData = {
    email: string;
    name: string;
    password: string;
};
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
    updateFields: (fields: Partial<UserData>) => void;
};

const SignUpForm = ({
    currentStepIndex,
    isStepCompleted,
    isNextActive,
    stepsLength,
    isFirstStep,
    next,
    back,
    isMobile,
    updateFields,
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
                Welcome to Chad
            </h2>

            <p className="text-gray-color mb-8 text-sm">
                Go live in 10 minutes! Our self-service widget empowers your
                customers to manage orders and track shipments 24/7 without
                driving you crazy.
            </p>

            <div>
                <form className="space-y-6">
                    <AppFormGroup label="Email">
                        <AppInput
                            type="email"
                            placeholder="megachad@trychad.com"
                            onChange={(e) =>
                                updateFields({ email: e.target.value })
                            }
                        />
                    </AppFormGroup>
                    <AppFormGroup label="Your name">
                        <AppInput
                            placeholder="Mega Chad"
                            onChange={(e) =>
                                updateFields({ name: e.target.value })
                            }
                        />
                    </AppFormGroup>
                    <AppFormGroup label="Password">
                        <AppInput
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) =>
                                updateFields({ password: e.target.value })
                            }
                        />
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
