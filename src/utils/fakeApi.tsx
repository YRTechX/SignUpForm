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
export const fakeConnectShopifyAPI = (
    errorProbability: number
): Promise<{ shopify_store_id: string; shopify_store_name: string }> => {
    return new Promise((resolve, reject) => {
        const randomId = Math.floor(Math.random() * 1000);
        const storeId = `store_${randomId}`;
        const storeName = `shop_${randomId}`;

        const delay = Math.random() * 1000 + 500;

        setTimeout(() => {
            const randomValue = Math.random() * 100;
            if (randomValue < errorProbability) {
                reject(new Error("Connection error"));
            } else {
                resolve({
                    shopify_store_id: storeId,
                    shopify_store_name: storeName,
                });
            }
        }, delay);
    });
};
