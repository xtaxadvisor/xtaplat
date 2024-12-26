"use strict";
`` `typescript
interface StorageItem {
  value: any;
  timestamp: number;
  expiry?: number;
}

class AIStorage {
  private static instance: AIStorage;
  private storage: Map<string, StorageItem>;
  private readonly DEFAULT_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

  private constructor() {
    this.storage = new Map();
  }

  public static getInstance(): AIStorage {
    if (!AIStorage.instance) {
      AIStorage.instance = new AIStorage();
    }
    return AIStorage.instance;
  }

  public set(key: string, value: any, expiry?: number): void {
    this.storage.set(key, {
      value,
      timestamp: Date.now(),
      expiry: expiry || this.DEFAULT_EXPIRY
    });
  }

  public get<T>(key: string): T | null {
    const item = this.storage.get(key);
    
    if (!item) return null;
    
    if (Date.now() - item.timestamp > (item.expiry || this.DEFAULT_EXPIRY)) {
      this.storage.delete(key);
      return null;
    }
    
    return item.value as T;
  }

  public delete(key: string): void {
    this.storage.delete(key);
  }

  public clear(): void {
    this.storage.clear();
  }

  public cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.storage.entries()) {
      if (now - item.timestamp > (item.expiry || this.DEFAULT_EXPIRY)) {
        this.storage.delete(key);
      }
    }
  }
}

export const aiStorage = AIStorage.getInstance();
` ``;
