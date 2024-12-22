import type { AIFeature } from '../../types/ai';

export const AI_FEATURES: Record<string, AIFeature[]> = {
  admin: [
    {
      id: 'compliance-check',
      name: 'Compliance Check',
      description: 'Analyze compliance with tax regulations',
      prompt: 'Analyze the following for compliance issues:'
    },
    {
      id: 'audit-review',
      name: 'Audit Review',
      description: 'Review documents for audit preparation',
      prompt: 'Review the following documents for audit readiness:'
    },
    {
      id: 'risk-assessment',
      name: 'Risk Assessment',
      description: 'Evaluate potential risks and mitigation strategies',
      prompt: 'Assess potential risks for:'
    },
    {
      id: 'policy-generator',
      name: 'Policy Generator',
      description: 'Generate policy documentation',
      prompt: 'Generate a policy document for:'
    }
  ],
  professional: [
    {
      id: 'tax-strategy',
      name: 'Tax Strategy',
      description: 'Generate tax optimization strategies',
      prompt: 'Suggest tax optimization strategies for:'
    },
    {
      id: 'client-analysis',
      name: 'Client Analysis',
      description: 'Analyze client financial data',
      prompt: 'Analyze the following client data:'
    },
    {
      id: 'deduction-finder',
      name: 'Deduction Finder',
      description: 'Identify potential tax deductions',
      prompt: 'Find potential deductions in:'
    },
    {
      id: 'advisory-report',
      name: 'Advisory Report',
      description: 'Generate professional advisory reports',
      prompt: 'Create an advisory report for:'
    }
  ],
  student: [
    {
      id: 'concept-explanation',
      name: 'Concept Explanation',
      description: 'Detailed explanation of financial concepts',
      prompt: 'Explain this financial concept in detail:'
    },
    {
      id: 'practice-problems',
      name: 'Practice Problems',
      description: 'Generate practice problems',
      prompt: 'Generate practice problems for:'
    },
    {
      id: 'study-guide',
      name: 'Study Guide',
      description: 'Create personalized study guides',
      prompt: 'Create a study guide for:'
    },
    {
      id: 'exam-prep',
      name: 'Exam Preparation',
      description: 'Generate exam preparation materials',
      prompt: 'Prepare exam materials for:'
    }
  ],
  investor: [
    {
      id: 'market-analysis',
      name: 'Market Analysis',
      description: 'Analyze market trends and opportunities',
      prompt: 'Analyze these market conditions:'
    },
    {
      id: 'portfolio-review',
      name: 'Portfolio Review',
      description: 'Review investment portfolio',
      prompt: 'Review this investment portfolio:'
    },
    {
      id: 'risk-analysis',
      name: 'Risk Analysis',
      description: 'Analyze investment risks',
      prompt: 'Analyze risks for:'
    },
    {
      id: 'strategy-advisor',
      name: 'Strategy Advisor',
      description: 'Generate investment strategies',
      prompt: 'Suggest investment strategies for:'
    }
  ]
};