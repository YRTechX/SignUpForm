import { FormData } from "@/utils/interfaces";
export const saveDataToLocalStorage = (data: FormData) => {
    try {
        localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
};

export const loginUser = (email: string, password: string): boolean => {
    try {
        const userData = getUserFromLocalStorage();
        if (
            userData &&
            userData.email === email &&
            userData.password === password
        ) {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
};
export const getUserFromLocalStorage = () => {
    try {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            return JSON.parse(storedData);
        }
        return null;
    } catch (error) {
        console.error("Error retrieving user data from localStorage:", error);
        return null;
    }
};
