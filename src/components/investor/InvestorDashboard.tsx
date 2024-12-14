import React from 'react';
import { TrendingUp, PlayCircle, Users, BookOpen } from 'lucide-react';

export function InvestorDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Investment Performance
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">+12.5%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <PlayCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Video Resources
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">24</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Network Members
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">156</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Resources
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">42</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Latest Video Content</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Q1 2024 Market Analysis',
                  duration: '45 min',
                  thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=300'
                },
                {
                  title: 'Investment Strategies Workshop',
                  duration: '60 min',
                  thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=300'
                }
              ].map((video, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-20 w-32 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{video.title}</h4>
                    <p className="text-sm text-gray-500">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Network</h3>
            <div className="space-y-4">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Financial Advisor',
                  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100'
                },
                {
                  name: 'Michael Chen',
                  role: 'Investment Analyst',
                  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100'
                }
              ].map((member, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}