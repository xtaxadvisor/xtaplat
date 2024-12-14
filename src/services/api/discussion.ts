import { db } from '../../lib/firebase';
import { collection, query, where, orderBy, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import type { Thread, ThreadFilters } from '../../types/discussion';

export const discussionService = {
  async getThreads(filters?: ThreadFilters) {
    try {
      let q = collection(db, 'threads');

      if (filters?.category) {
        q = query(q, where('category', '==', filters.category));
      }

      if (filters?.location) {
        q = query(q, where('location', '==', filters.location));
      }

      if (filters?.tags?.length) {
        q = query(q, where('tags', 'array-contains-any', filters.tags));
      }

      // Add sorting based on filter preferences
      switch (filters?.sortBy) {
        case 'popular':
          q = query(q, orderBy('likes', 'desc'));
          break;
        case 'unanswered':
          q = query(q, where('replies', '==', 0));
          break;
        default:
          q = query(q, orderBy('createdAt', 'desc'));
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Thread[];
    } catch (error) {
      console.error('Error fetching threads:', error);
      throw error;
    }
  },

  async createThread(threadData: Omit<Thread, 'id' | 'createdAt' | 'updatedAt' | 'likes' | 'replies'>) {
    try {
      const now = new Date().toISOString();
      const thread = {
        ...threadData,
        createdAt: now,
        updatedAt: now,
        likes: 0,
        replies: 0,
        isPinned: false
      };

      const docRef = await addDoc(collection(db, 'threads'), thread);
      return {
        id: docRef.id,
        ...thread
      };
    } catch (error) {
      console.error('Error creating thread:', error);
      throw error;
    }
  },

  async updateThread(id: string, updates: Partial<Thread>) {
    try {
      const threadRef = doc(db, 'threads', id);
      await updateDoc(threadRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating thread:', error);
      throw error;
    }
  },

  async deleteThread(id: string) {
    try {
      await deleteDoc(doc(db, 'threads', id));
    } catch (error) {
      console.error('Error deleting thread:', error);
      throw error;
    }
  }
};