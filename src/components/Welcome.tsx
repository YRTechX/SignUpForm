import { CheckIcon } from "@heroicons/react/solid";
import AppButton from "@/components/UI/AppButton";
import { useState, useEffect } from "react";
import { getUserFromLocalStorage } from "@/utils/functions";
import { FormData } from "@/utils/interfaces";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
    const [userData, setUserData] = useState<FormData | null>(null);
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    };
    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (user) {
            setUserData(user);
        }

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
            {isMobile ? (
                <>
                    <div className="bg-green-color h-20 w-20 mb-10 rounded-full flex justify-center items-center mx-auto">
                        <CheckIcon className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-heading-color font-semibold text-xl mb-2 text-center">
                        Use your desktop to access Chad
                    </p>
                    <p className="text-gray-color text-sm mb-6">
                        Chad doesn’t support mobile browsers. To access your
                        dashboard, login from your laptop or desktop computer.
                    </p>
                    <AppButton>Ok</AppButton>
                    <div className="mt-2">
                        <p className="text-center text-xs text-gray-color">
                            Not {userData ? userData.email : ""}?{" "}
                            <a
                                className="text-link-color hover:opacity-80"
                                onClick={handleLogout}
                            >
                                Logout
                            </a>
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-heading-color font-bold text-2xl mb-8">
                        Hello Luna Edge, My name is {`${userData?.name}`}. 🚀
                    </p>
                </>
            )}
        </>
    );
};

export default Welcome;
