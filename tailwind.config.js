/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "form-bg": "var(--form-bg)",
                "button-bg": "var(--button-bg)",
                "gray-color": "var(--gray-color)",
                "heading-color": "var(--heading-color)",
                "form-info-color": "var(--form-info-color)",
                "form-color": "var(--form-color)",
                "link-color": "var(--link-color)",
                "logo-color": "var(--logo-color)",
                "input-bg": "var(--input-bg)",
                "input-placeholder-color": "var(--input-placeholder-color)",
                "black-color": "var(--black-color)",
                "eye-icon-color": "var(--eye-icon-color)",
                "progress-handle-bg": "var(--progress-handle-bg)",
                "progress-handle-active-color":
                    "var(--progress-handle-active-color)",
                "slider-dots-color": "var(--slider-dots-color)",
                "slider-dots-active-color": "var(--slider-dots-active-color)",
                "mobile-progress-gray": "var(--mobile-progress-gray)",
                "progress-btn-disabled-color":
                    "var(--progress-btn-disabled-color)",
            },
            boxShadow: {
                "card-shadow": "var(--card-shadow)",
            },
            backgroundImage: {
                "sign-up": "url('@/assets/images/signUpBg.png')",
                "progress-bg-gradient": "var(--progress-bg-gradient)",
            },
            screens: {
                desktop: "1440px",
            },
        },
    },
    plugins: [],
};
