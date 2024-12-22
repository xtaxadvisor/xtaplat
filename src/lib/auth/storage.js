const USER_STORAGE_KEY = 'currentUser';
export function storeUser(user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}
export function getStoredUser() {
    const userData = localStorage.getItem(USER_STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
}
export function clearStoredUser() {
    localStorage.removeItem(USER_STORAGE_KEY);
}
export function isValidStoredUser(user) {
    if (!user.id || !user.email || !user.role) {
        return false;
    }
    if (user.role === 'admin' && !user.isAdmin) {
        return false;
    }
    return true;
}
