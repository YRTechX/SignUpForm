import { ReactNode } from "react";

type signUpCardProps = {
    children: ReactNode;
};

const SignUpCard = ({ children }: signUpCardProps) => {
    return (
        <div className="w-full max-md:h-full md:w-[540px] bg-white flex flex-col justify-center rounded-lg shadow-card-shadow px-10 md:py-16 py-4">
            {children}
        </div>
    );
};
export default SignUpCard;
