import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ServiceCard } from '../booking/ServiceCard';
import { BookingModal } from '../booking/BookingModal';
export function Services() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [selectedService, setSelectedService] = useState(null);
    const services = [
        {
            title: 'Tax Planning',
            description: 'Strategic tax planning and preparation services for optimal financial outcomes.',
            price: '$200',
            duration: '60 minutes',
            features: [
                'Personal & Business Tax Planning',
                'Tax Return Preparation',
                'Tax Compliance Review',
                'Deduction Optimization',
                'Year-round Support'
            ],
            popular: true
        },
        {
            title: 'Financial Review',
            description: 'Comprehensive financial analysis and planning for your future.',
            price: '$150',
            duration: '45 minutes',
            features: [
                'Financial Statement Analysis',
                'Cash Flow Projections',
                'Budget Planning',
                'Performance Metrics',
                'Investment Review'
            ]
        },
        {
            title: 'Investment Advisory',
            description: 'Expert investment guidance and portfolio management services.',
            price: '$250',
            duration: '90 minutes',
            features: [
                'Portfolio Analysis',
                'Investment Strategy',
                'Risk Assessment',
                'Market Research',
                'Regular Portfolio Reviews'
            ]
        },
        {
            title: 'Business Consulting',
            description: 'Strategic business advice and growth planning for entrepreneurs.',
            price: '$175',
            duration: '60 minutes',
            features: [
                'Business Strategy',
                'Growth Planning',
                'Market Analysis',
                'Financial Forecasting',
                'Performance Optimization'
            ]
        }
    ];
    const handleBooking = (serviceTitle) => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        setSelectedService(serviceTitle.toLowerCase().replace(/\s+/g, '-'));
    };
    return (<section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert financial solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (<ServiceCard key={service.title} title={service.title} description={service.description} price={service.price} duration={service.duration} features={service.features} popular={service.popular} onBook={() => handleBooking(service.title)}/>))}
        </div>
      </div>

      {selectedService && (<BookingModal isOpen={true} onClose={() => setSelectedService(null)} serviceType={selectedService}/>)}
    </section>);
}
