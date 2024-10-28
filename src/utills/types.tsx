export type ConnectCSEmailData = {
    currentStepIndex: number;
    progress?: number;
    isStepCompleted?: boolean;
    isNextActive: boolean;
    isMobile: boolean;
    isFirstStep: boolean;
    stepsLength: number;
    next: () => void;
    back: () => void;
    updateFields: (
        fields: Partial<CustomerSupportEmailData>,
        path?: string
    ) => void;
    data: CustomerSupportEmailData;
    loading: (loadingState: boolean) => void;
    isLoading: boolean;
    response: (responseState: boolean) => void;
    isResponse: boolean;
};
type UserData = {
    email: string;
    name: string;
    password: string;
};
export type SignUpFormProps = {
    currentStepIndex: number;
    progress?: number;
    isStepCompleted?: boolean;
    isNextActive: boolean;
    isMobile: boolean;
    isFirstStep: boolean;
    stepsLength: number;
    next: () => void;
    back: () => void;
    updateFields: (fields: Partial<UserData>) => void;
    loading: (loadingState: boolean) => void;
    isLoading: boolean;
    response: (responseState: boolean) => void;
    isResponse: boolean;
};
type CustomerSupportEmailData = {
    shopify_store_id: string;
    shopify_store_name: string;
    non_shopify_platform_name?: string;
    [key: string]: any;
};

type ShopifyData = {
    shopify_store_id: string;
    shopify_store_name: string;
    non_shopify_platform_name?: string;
    [key: string]: any;
};
export type ConnectShopifyProps = {
    currentStepIndex: number;
    progress?: number;
    isStepCompleted?: boolean;
    isNextActive: boolean;
    isMobile: boolean;
    isFirstStep: boolean;
    stepsLength: number;
    next: () => void;
    back: () => void;
    updateFields: (fields: Partial<ShopifyData>, path?: string) => void;
    data: ShopifyData;
    loading: (loadingState: boolean) => void;
    isLoading: boolean;
    response: (responseState: boolean) => void;
    isResponse: boolean;
};
