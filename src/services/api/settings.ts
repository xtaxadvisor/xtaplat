import { api } from '../api';

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

export const settingsService = {
  getSettings: () => 
    api.get<Settings>('/settings'),

  updateSettings: ({ section, data }: UpdateSettingsDTO) => 
    api.put<Settings>(`/settings/${section}`, data),

  exportSettings: () => 
    api.get<Blob>('/settings/export', {
      headers: { Accept: 'application/json' }
    }),

  importSettings: (data: any) => 
    api.post<Settings>('/settings/import', data),
};