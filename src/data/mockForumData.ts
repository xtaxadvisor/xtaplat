import type { InvestmentThread } from '../services/api/investmentForum';

export const mockThreads: InvestmentThread[] = [
  {
    id: '1',
    title: 'Guide: Real Estate Investment Fundamentals',
    content: 'A comprehensive guide covering the basics of real estate investment, including property valuation, market analysis, and ROI calculation.',
    category: 'real-estate',
    author: {
      id: 'admin1',
      name: 'Michael Chen',
      role: 'Investment Advisor'
    },
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
    replies: 24,
    views: 1250,
    tags: ['guide', 'fundamentals', 'investment-basics'],
    isPinned: true
  },
  {
    id: '2',
    title: 'Property Maintenance Best Practices',
    content: 'Essential maintenance tips and schedules for property owners. Learn how to protect your investment and maintain property value.',
    category: 'maintenance',
    author: {
      id: 'admin2',
      name: 'Sarah Martinez',
      role: 'Property Manager'
    },
    createdAt: '2024-03-14T15:30:00Z',
    updatedAt: '2024-03-14T15:30:00Z',
    replies: 18,
    views: 856,
    tags: ['maintenance', 'property-management', 'tips'],
    isPinned: true
  },
  {
    id: '3',
    title: 'Market Analysis: Q1 2024 Real Estate Trends',
    content: 'Analysis of current market trends, including price movements, demand patterns, and investment opportunities in different regions.',
    category: 'market-analysis',
    author: {
      id: 'admin3',
      name: 'David Wilson',
      role: 'Market Analyst'
    },
    createdAt: '2024-03-13T09:15:00Z',
    updatedAt: '2024-03-13T09:15:00Z',
    replies: 32,
    views: 1876,
    tags: ['market-trends', 'analysis', '2024'],
    isPinned: true
  },
  {
    id: '4',
    title: 'Property Management Software Comparison',
    content: 'Detailed comparison of popular property management software solutions, including features, pricing, and user reviews.',
    category: 'property-management',
    author: {
      id: 'admin4',
      name: 'Emily Johnson',
      role: 'Tech Advisor'
    },
    createdAt: '2024-03-12T14:20:00Z',
    updatedAt: '2024-03-12T14:20:00Z',
    replies: 15,
    views: 642,
    tags: ['software', 'technology', 'management-tools'],
    isPinned: false
  },
  {
    id: '5',
    title: 'Seasonal Maintenance Checklist',
    content: 'Complete checklist for seasonal property maintenance, including preventive measures and common issues to watch for.',
    category: 'maintenance',
    author: {
      id: 'admin2',
      name: 'Sarah Martinez',
      role: 'Property Manager'
    },
    createdAt: '2024-03-11T11:45:00Z',
    updatedAt: '2024-03-11T11:45:00Z',
    replies: 22,
    views: 934,
    tags: ['maintenance', 'checklist', 'seasonal'],
    isPinned: false
  }
];