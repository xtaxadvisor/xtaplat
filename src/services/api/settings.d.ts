export interface Settings {
    profile: {
        companyName: string;
        website: string;
        address: string;
        phone: string;
        email: string;
    };
    billing: {
        defaultCurrency: string;
        taxRate: number;
        paymentTerms: number;
        invoicePrefix: string;
        defaultNotes: string;
    };
    notifications: {
        email: Record<string, boolean>;
        push: Record<string, boolean>;
    };
    team: {
        members: Array<{
            id: string;
            name: string;
            email: string;
            role: string;
            status: string;
        }>;
    };
    security: {
        twoFactorEnabled: boolean;
        lastPasswordChange: string;
        sessionTimeout: number;
    };
}
export interface UpdateSettingsDTO {
    section: string;
    data: any;
}
export declare const settingsService: {
    getSettings: () => Promise<Settings>;
    updateSettings: ({ section, data }: UpdateSettingsDTO) => Promise<Settings>;
    exportSettings: () => Promise<Blob>;
    importSettings: (data: any) => Promise<Settings>;
};
