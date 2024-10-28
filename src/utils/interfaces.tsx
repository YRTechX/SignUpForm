export interface ShopifyData {
    shopify: boolean;
    shopify_store_id: string;
    shopify_store_name: string;
    non_shopify_platform_id: string;
    non_shopify_platform_name: string;
}

export interface CustomerSupportEmail {
    gmail: boolean;
    gmail_address: string;
    non_gmail_platform_id: string;
    non_gmail_platform_name: string;
}

export interface FormData {
    email: string;
    name: string;
    password: string;
    shopify: ShopifyData;
    customer_support_email: CustomerSupportEmail;
}
export interface ResponseReceivedProps {
    setResponse: (status: boolean) => void;
    handleStepChange: (currentStepIndex: number, status: boolean) => void;
    currentStepIndex: number;
}
export interface ReadyToGoProps {
    isMobile: boolean;
    saveData: () => void;
}
export interface SignUpProgressProps {
    currentStepIndex: number;
    isStepCompleted: (index: number) => boolean;
    isNextActive: boolean;
    isFirstStep: boolean;
    next: () => void;
    back: () => void;
    isProgress: boolean;
}
export interface MobileSignUpProgressProps {
    currentStepIndex: number;
    isNextActive: boolean;
    isFirstStep: boolean;
    stepsLength: number;
    next: () => void;
    back: () => void;
    isProgress: boolean;
}
