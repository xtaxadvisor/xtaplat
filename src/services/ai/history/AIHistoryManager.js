export class AIHistoryManager {
    history = [];
    MAX_HISTORY = 100;
    addMessages(...messages) {
        this.history.push(...messages);
        // Keep history size in check
        if (this.history.length > this.MAX_HISTORY) {
            this.history = this.history.slice(-this.MAX_HISTORY);
        }
    }
    getHistory() {
        return [...this.history];
    }
    clearHistory() {
        this.history = [];
    }
}
