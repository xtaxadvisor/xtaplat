export declare const ROUTES: {
    readonly HOME: "/";
    readonly LOGIN: "/login";
    readonly REGISTER: "/register";
    readonly DASHBOARD: "/dashboard";
    readonly ADMIN: "/admin";
    readonly PROFESSIONAL: "/professional";
    readonly INVESTOR: "/investor";
    readonly SERVICES: "/services";
    readonly SAME_DAY_SERVICES: "/same-day-services";
    readonly VIDEOS: "/browse-videos";
    readonly CONSULTATION: "/consultation";
};
export declare const PROTECTED_ROUTES: readonly ["/dashboard", "/admin", "/professional", "/investor"];
export declare const PUBLIC_ROUTES: readonly ["/", "/login", "/register", "/services", "/same-day-services", "/browse-videos"];
