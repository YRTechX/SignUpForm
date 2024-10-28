import { FormData } from "@/utills/interfaces";
export const saveDataToLocalStorage = (data: FormData) => {
    try {
        localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
};

export const loginUser = (email: string, password: string): boolean => {
    try {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            const parsedData: FormData = JSON.parse(storedData);

            if (
                parsedData.email === email &&
                parsedData.password === password
            ) {
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
};
