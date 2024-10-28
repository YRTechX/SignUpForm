import { useState, useEffect } from "react";
import logoImage from "@/assets/images/chadLogo.png";
import AppFormGroup from "@/components/UI/AppFormGroup";
import AppInput from "@/components/UI/AppInput";
import AppButton from "@/components/UI/AppButton";
import { saveDataToLocalStorage, loginUser } from "@/utils/functions";

const SignIn = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1440);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const validateFields = () => {
        const newErrors: { [key: string]: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (data.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateFields()) {
            const isAuthenticated = loginUser(data.email, data.password);

            if (isAuthenticated) {
                setIsLoggedIn(true);
                window.location.href = "/dashboard";
            } else {
                setErrors({ login: "Invalid email or password." });
            }
        }
    };

    return (
        <>
            <div className="flex mb-6">
                <img src={logoImage} alt="logo" />
                <div className="text-logo-color font-bold text-2xl">Chad</div>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-heading-color">
                Welcome back
            </h2>

            <p className="text-gray-color mb-8 text-sm">
                Feeling ready to take on the day? Chad is too!
            </p>

            <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <AppFormGroup label="Email">
                        <AppInput
                            type="email"
                            name="email"
                            placeholder="megachad@trychad.com"
                            value={data.email}
                            onChange={handleChange}
                            isError={!!errors.email}
                        />
                        {errors.email && (
                            <p className="text-red-600">{errors.email}</p>
                        )}
                    </AppFormGroup>
                    <AppFormGroup label="Password">
                        <AppInput
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={handleChange}
                            isError={!!errors.password}
                        />
                        {errors.password && (
                            <p className="text-red-600">{errors.password}</p>
                        )}
                    </AppFormGroup>

                    {errors.login && (
                        <p className="text-red-600">{errors.login}</p>
                    )}

                    <AppButton>Login</AppButton>
                </form>
            </div>

            <div className="mt-4">
                <p className="text-center text-xs text-gray-color">
                    Don’t have an account?{" "}
                    <a href="#" className="text-link-color hover:opacity-80">
                        Join the waitlist
                    </a>
                </p>
            </div>
        </>
    );
};

export default SignIn;
