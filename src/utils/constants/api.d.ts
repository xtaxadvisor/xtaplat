export declare const API_ENDPOINTS: {
    readonly AUTH: {
        readonly LOGIN: "/auth/login";
        readonly REGISTER: "/auth/register";
        readonly LOGOUT: "/auth/logout";
        readonly REFRESH: "/auth/refresh";
        readonly ME: "/auth/me";
    };
    readonly USERS: "/users";
    readonly CLIENTS: "/clients";
    readonly CONSULTATIONS: "/consultations";
    readonly DOCUMENTS: "/documents";
    readonly MESSAGES: "/messages";
    readonly ANALYTICS: "/analytics";
    readonly SETTINGS: "/settings";
};
export declare const API_CONFIG: {
    readonly BASE_URL: any;
    readonly TIMEOUT: 10000;
    readonly RETRY_ATTEMPTS: 3;
};
