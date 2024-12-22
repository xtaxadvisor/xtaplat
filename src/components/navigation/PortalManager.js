import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
import { getPortalConfig } from './portalConfig';
export function usePortalManager() {
    const { user, isAuthenticated } = useAuth();
    const { addNotification } = useNotificationStore();
    const checkPortalAccess = (portalId) => {
        const config = getPortalConfig(portalId);
        if (!config)
            return false;
        if (!isAuthenticated) {
            return false;
        }
        if (config.requiredRole && (!user?.role || !config.requiredRole.includes(user.role))) {
            return false;
        }
        return true;
    };
    const handlePortalAccess = (portalId) => {
        if (!isAuthenticated) {
            return {
                canAccess: false,
                redirectPath: `/login?redirect=${portalId}`
            };
        }
        const config = getPortalConfig(portalId);
        if (!config) {
            addNotification('Portal not found', 'error');
            return { canAccess: false };
        }
        if (config.requiredRole && (!user?.role || !config.requiredRole.includes(user.role))) {
            addNotification('You do not have permission to access this portal', 'error');
            return { canAccess: false };
        }
        return { canAccess: true };
    };
    return {
        checkPortalAccess,
        handlePortalAccess
    };
}
