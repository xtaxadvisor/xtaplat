import React from 'react';
import { Bot, Shield, Clock, MessageSquare, Sparkles } from 'lucide-react';

export function AIWelcomeMessage() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
          <Bot className="h-8 w-8 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          Welcome to XTaXAdvisors AI Assistant
        </h3>
        <p className="mt-2 text-gray-600">
          I'm here to provide instant, expert assistance with your tax and financial questions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          {
            icon: Shield,
            title: 'Expert Knowledge',
            description: 'Access to professional tax & financial expertise'
          },
          {
            icon: Clock,
            title: '24/7 Available',
            description: 'Get answers anytime, anywhere'
          },
          {
            icon: MessageSquare,
            title: 'Easy Communication',
            description: 'Simple, clear explanations'
          },
          {
            icon: Sparkles,
            title: 'Smart Assistance',
            description: 'Personalized help & recommendations'
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <feature.icon className="h-6 w-6 text-blue-600 mb-2" />
            <h4 className="text-sm font-medium text-gray-900">{feature.title}</h4>
            <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-600">
        Start by asking a question or choose from the suggestions below
      </div>
    </div>
  );
}