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
            },
            boxShadow: {
                "card-shadow": "var(--card-shadow)",
            },
            backgroundImage: {
                "sign-up": "url('@/assets/images/signUpBg.png')",
            },
        },
    },
    plugins: [],
};
