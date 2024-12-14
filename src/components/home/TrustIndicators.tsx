import React from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Building2, 
  Star,
  CheckCircle 
} from 'lucide-react';

export function TrustIndicators() {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '10K+', label: 'Happy Clients', icon: Users },
    { value: '98%', label: 'Client Retention', icon: TrendingUp },
    { value: '50M+', label: 'Managed Assets', icon: Building2 }
  ];

  const certifications = [
    'Certified Public Accountants',
    'Chartered Financial Analysts',
    'Certified Financial Planners',
    'IRS Enrolled Agents'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Thousands of Clients
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Industry-leading expertise and proven track record
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-50 rounded-full">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <Star className="h-6 w-6 text-yellow-400" />
              <h3 className="ml-2 text-xl font-semibold text-gray-900">
                Industry Recognition
              </h3>
            </div>
            <div className="space-y-4">
              {[
                'Top 100 Tax Advisory Firms 2023',
                'Excellence in Financial Planning Award',
                'Best Digital Innovation in Finance 2023',
                'Customer Service Excellence Award'
              ].map((award, index) => (
                <div key={index} className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{award}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h3 className="ml-2 text-xl font-semibold text-gray-900">
                Professional Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full">
            <span className="text-blue-600 font-medium">
              Regulated by SEC and FINRA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}