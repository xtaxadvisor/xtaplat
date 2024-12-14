import React from 'react';
import { ServiceCategory } from '../../components/services/ServiceCategory';
import { WhyChooseUs } from '../../components/services/WhyChooseUs';
import { 
  FileText, 
  Building2, 
  FileCheck, 
  Globe, 
  Calculator,
  MessageSquare,
  ArrowLeft 
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function ServiceCatalog() {
  const navigate = useNavigate();
  const categories = [
    {
      title: 'Tax Services',
      icon: Calculator,
      services: [
        {
          name: 'Individual Tax Return (W-2)',
          description: 'Professional preparation of your personal tax return with W-2 income.',
          price: '$199',
          duration: '45 min',
          features: ['Federal & State Filing', 'E-Filing Included', 'Tax Planning Consultation']
        },
        {
          name: 'Individual Tax Return (Schedule C)',
          description: 'Comprehensive tax preparation for self-employed individuals.',
          price: '$299',
          duration: '60 min',
          features: ['Business Income & Expenses', 'Quarterly Estimates', 'Deduction Optimization']
        },
        {
          name: 'Business Tax Returns',
          description: 'Expert tax preparation for various business entities.',
          price: '$499',
          duration: '90 min',
          features: ['LLC, S-Corp, C-Corp Returns', 'Multi-State Filing', 'Tax Strategy Planning']
        }
      ]
    },
    {
      title: 'Business Services',
      icon: Building2,
      services: [
        {
          name: 'Business Formation',
          description: 'Complete business entity formation and registration services.',
          price: '$599',
          duration: '2-3 days',
          features: ['Entity Selection', 'State Registration', 'EIN Application', 'Operating Agreement']
        },
        {
          name: 'Bookkeeping',
          description: 'Professional bookkeeping and financial record maintenance.',
          price: '$299/mo',
          features: ['Monthly Reconciliation', 'Financial Statements', 'Expense Tracking']
        },
        {
          name: 'Payroll Services',
          description: 'Comprehensive payroll processing and tax filing.',
          price: '$199/mo',
          features: ['Payroll Processing', 'Tax Deposits', 'W-2/1099 Preparation']
        }
      ]
    },
    {
      title: 'Advisory Services',
      icon: MessageSquare,
      services: [
        {
          name: 'Tax Planning',
          description: 'Strategic tax planning to minimize tax liability.',
          price: '$399',
          duration: '90 min',
          features: ['Tax Projection', 'Strategy Development', 'Implementation Plan']
        },
        {
          name: 'Financial Advisory',
          description: 'Comprehensive financial planning and investment advice.',
          price: '$499',
          duration: '120 min',
          features: ['Investment Review', 'Retirement Planning', 'Risk Assessment']
        },
        {
          name: 'Business Consulting',
          description: 'Expert business advice and growth strategies.',
          price: '$599',
          duration: '120 min',
          features: ['Business Analysis', 'Growth Strategy', 'Process Optimization']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            icon={ArrowLeft}
            onClick={() => navigate('/')}
            className="mb-6"
          >
            Back to Home
          </Button>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive financial and business solutions tailored to your needs
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <ServiceCategory
              key={index}
              title={category.title}
              icon={category.icon}
              services={category.services}
            />
          ))}
        </div>

        <WhyChooseUs />
      </div>
    </div>
  );
}