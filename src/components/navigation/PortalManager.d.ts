export declare function usePortalManager(): {
    checkPortalAccess: (portalId: string) => boolean;
    handlePortalAccess: (portalId: string) => {
        canAccess: boolean;
        redirectPath?: string;
    };
};
