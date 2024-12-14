import React from 'react';
import { Shield, Award, Users, Target, BookOpen, Briefcase } from 'lucide-react';
import { TeamGrid } from '../team/TeamGrid';

export function AboutUs() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Satisfied Clients', value: '1000+' },
    { label: 'Tax Returns Filed', value: '5000+' },
    { label: 'Team Members', value: '25+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of professional ethics and transparency.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide to our clients.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build lasting relationships based on trust.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Your Trusted Financial Partner
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Located in Orlando, Florida, we provide comprehensive tax and financial advisory 
            services to help individuals and businesses achieve their financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To provide exceptional financial and tax advisory services that empower our 
              clients to achieve their financial goals through expert guidance, innovative 
              solutions, and unwavering integrity.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To be the most trusted and respected financial advisory firm, known for our 
              commitment to excellence, innovation, and the success of our clients.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Leadership Team</h3>
          <TeamGrid />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
          <p className="text-gray-600">
            7575 Kingspointe Pkwy Suite 20<br />
            Orlando, Florida 32819
          </p>
          <p className="text-gray-600 mt-2">
            Call us: <a href="tel:+13212390386" className="text-blue-600 hover:text-blue-700">+1 321-239-0386</a>
          </p>
        </div>
      </div>
    </section>
  );
}