export const fakeConnectGoogleAPI = (
    errorProbability: number
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const randomEmail = `user${Math.floor(Math.random() * 1000)}@gmail.com`;

        const delay = Math.random() * 1000 + 500;

        setTimeout(() => {
            const randomValue = Math.random() * 100;
            if (randomValue < errorProbability) {
                reject(new Error("Connection error"));
            } else {
                resolve(randomEmail);
            }
        }, delay);
    });
};
