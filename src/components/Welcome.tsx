import { CheckIcon } from "@heroicons/react/solid";
import AppButton from "@/components/UI/AppButton";
import { useState, useEffect } from "react";
import { getUserFromLocalStorage } from "@/utils/functions";

const Welcome = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
    const [userData, setUserData] = useState({ email: "" });

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
                            Not {userData?.email}?{" "}
                            <a
                                href="#"
                                className="text-link-color hover:opacity-80"
                            >
                                Logout
                            </a>
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-heading-color font-bold text-2xl mb-8">
                        You’re ready to go! 🚀
                    </p>
                    <p className="text-gray-color mb-8">
                        A fully loaded self-service portal is now ready to
                        deploy on your Shopify store.
                    </p>
                    <p className="text-gray-colormb-8">
                        We’ve programmed it to follow industry best practices
                        for shipping, return & exchange, and payment policy.
                    </p>
                    <p className="text-gray-color mb-8">
                        You can customize these settings to fit your store
                        policy anytime.
                    </p>
                    <p className="text-gray-color font-semibold mb-4">
                        Lastly,{" "}
                        <span className="font-">
                            nothing is live until you hit “Go Live”!
                        </span>
                    </p>
                    <AppButton>Start customizing</AppButton>
                </>
            )}
        </>
    );
};

export default Welcome;
