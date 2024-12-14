import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "XTaXAdvisors transformed our financial management. Their expertise in tax planning saved us thousands and their innovative platform makes everything seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      content: "The virtual consultations are incredibly convenient, and their professional team provides invaluable insights for our growing business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Investment Manager",
      content: "Their comprehensive approach to financial advisory services sets them apart. The platform's user experience is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our satisfied clients about their experience
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:-translate-y-1"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full">
            <span className="text-blue-600 font-medium">Join our growing community of successful clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}