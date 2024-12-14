import React, { useState } from 'react';
import { 
  Shield, 
  PieChart, 
  Video, 
  FileText, 
  MessageSquare,
  ArrowRight 
} from 'lucide-react';
import { Button } from '../ui/Button';

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Shield,
      title: 'Secure Document Management',
      description: 'Bank-level encryption for all your sensitive financial documents with secure sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200',
    },
    {
      icon: Video,
      title: 'Virtual Consultations',
      description: 'Connect with our experts from anywhere through our secure video conferencing platform.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200',
    },
    {
      icon: PieChart,
      title: 'Real-time Analytics',
      description: 'Track your financial performance with interactive dashboards and detailed reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Powerful Features for Your Financial Success
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage and grow your finances
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeFeature === index
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 absolute inset-0 transform translate-y-4'
                }`}
                style={{ display: activeFeature === index ? 'block' : 'none' }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-0 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-blue-50 shadow-md'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center">
                  <feature.icon 
                    className={`h-8 w-8 ${
                      activeFeature === index ? 'text-blue-600' : 'text-gray-400'
                    }`} 
                  />
                  <h3 className="ml-4 text-xl font-medium text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-2 text-gray-600 pl-12">
                  {feature.description}
                </p>
              </div>
            ))}

            <div className="pl-12 pt-4">
              <Button
                variant="primary"
                icon={ArrowRight}
                iconPosition="right"
                className="hover-scale"
              >
                Explore All Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}