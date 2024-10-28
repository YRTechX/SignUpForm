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
    SetLoading: (loadingState: boolean) => void;
    isLoading: boolean;
    SetResponse: (responseState: boolean) => void;
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
    SetLoading: (loadingState: boolean) => void;
    isLoading: boolean;
    SetResponse: (responseState: boolean) => void;
    isResponse: boolean;
    data: UserData;
    validateStep: (index: number, isValid: boolean) => void;
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
    SetLoading: (loadingState: boolean) => void;
    isLoading: boolean;
    SetResponse: (responseState: boolean) => void;
    isResponse: boolean;
};
