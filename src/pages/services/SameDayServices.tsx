import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Stamp, 
  Building2, 
  FileCheck, 
  DollarSign, 
  BookOpen,
  ArrowLeft,
  Clock,
  ClipboardList,
  Calculator,
  Users,
  BarChart,
  Briefcase,
  BookIcon,
  FileSpreadsheet,
  FileSignature,
  Building,
  FileCode
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface Service {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ComponentType;
  features: string[];
}

export default function SameDayServices() {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: 'Good Standing Certificates',
      description: 'Obtain official certificates verifying your LLC\'s compliance with state regulations.',
      price: '$149',
      duration: '24 hours',
      icon: FileCheck,
      features: [
        'State Compliance Check',
        'Document Preparation',
        'Rush Processing',
        'Digital Delivery'
      ]
    },
    {
      title: 'Operating Agreements',
      description: 'Custom LLC operating agreements tailored to your business needs.',
      price: '$299',
      duration: '24 hours',
      icon: FileSignature,
      features: [
        'Custom Drafting',
        'Member Rights',
        'Management Structure',
        'Profit Distribution'
      ]
    },
    {
      title: 'Corporate Bylaws',
      description: 'Professional drafting of comprehensive corporate bylaws.',
      price: '$349',
      duration: '24 hours',
      icon: Building,
      features: [
        'Governance Rules',
        'Officer Duties',
        'Meeting Procedures',
        'Amendment Process'
      ]
    },
    {
      title: 'EIN Application',
      description: 'Expert assistance with federal tax ID (EIN) applications.',
      price: '$199',
      duration: '24 hours',
      icon: FileCode,
      features: [
        'Form SS-4 Preparation',
        'IRS Submission',
        'Verification Support',
        'Digital Copy'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          icon={ArrowLeft}
          onClick={() => navigate('/')}
          className="mb-8"
        >
          Back to Home
        </Button>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Same Day Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Professional business services with rapid turnaround
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 min-h-[48px]">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}