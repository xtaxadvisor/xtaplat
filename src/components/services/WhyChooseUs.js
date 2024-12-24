<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Shield, Clock, Users, Award } from 'lucide-react';
export function WhyChooseUs() {
    const reasons = [
        {
            icon: Shield,
            title: 'Expert & Certified',
            description: 'Our team consists of certified professionals with years of experience'
        },
        {
            icon: Clock,
            title: 'Time-Efficient',
            description: 'Fast turnaround times without compromising quality'
        },
        {
            icon: Users,
            title: 'Personalized Service',
            description: 'Tailored solutions to meet your specific needs'
        },
        {
            icon: Award,
            title: 'Guaranteed Quality',
            description: 'Satisfaction guaranteed with our premium services'
        }
    ];
<<<<<<< HEAD
    return (_jsxs("div", { className: "mt-20", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Why Choose XTaXAdvisors" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Experience the difference of working with industry leaders" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: reasons.map((reason, index) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg", children: [_jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4", children: _jsx(reason.icon, { className: "h-6 w-6 text-blue-600" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900", children: reason.title }), _jsx("p", { className: "mt-2 text-gray-600", children: reason.description })] }, index))) })] }));
=======
    return (<div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose XTaXAdvisors</h2>
        <p className="mt-4 text-xl text-gray-600">
          Experience the difference of working with industry leaders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (<div key={index} className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
              <reason.icon className="h-6 w-6 text-blue-600"/>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
            <p className="mt-2 text-gray-600">{reason.description}</p>
          </div>))}
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
