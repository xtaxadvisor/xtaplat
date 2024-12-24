<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { ServiceCategory } from './ServiceCategory';
import { WhyChooseUs } from './WhyChooseUs';
import { Calculator, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
export function ServiceCatalog() {
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
        // ... rest of the categories remain the same
    ];
<<<<<<< HEAD
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [_jsxs("div", { className: "mb-8", children: [_jsx(Button, { variant: "ghost", icon: ArrowLeft, onClick: () => navigate('/'), className: "mb-6", children: "Back to Home" }), _jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Our Services" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Comprehensive financial and business solutions tailored to your needs" })] })] }), _jsx("div", { className: "space-y-16", children: categories.map((category, index) => (_jsx(ServiceCategory, { title: category.title, icon: category.icon, services: category.services }, index))) }), _jsx(WhyChooseUs, {})] }) }));
=======
    return (<div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button variant="ghost" icon={ArrowLeft} onClick={() => navigate('/')} className="mb-6">
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
          {categories.map((category, index) => (<ServiceCategory key={index} title={category.title} icon={category.icon} services={category.services}/>))}
        </div>

        <WhyChooseUs />
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
