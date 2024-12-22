<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Check, Calendar, Clock, DollarSign } from 'lucide-react';
import { Button } from '../ui/Button';
import { BookingModal } from '../booking/BookingModal';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export function ServiceItem({ name, description, price, features, duration = '60 min' }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const handleBookNow = () => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: location.pathname } });
            return;
        }
        setIsBookingModalOpen(true);
    };
<<<<<<< HEAD
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: name }), _jsx("p", { className: "mt-2 text-gray-600 text-sm min-h-[48px]", children: description }), _jsxs("div", { className: "mt-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center text-blue-600 font-bold", children: [_jsx(DollarSign, { className: "h-5 w-5 mr-1" }), _jsx("span", { className: "text-xl", children: price })] }), _jsxs("div", { className: "flex items-center text-gray-500 text-sm", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: duration })] })] }), _jsx("div", { className: "my-6 border-t border-gray-100 pt-4", children: _jsx("ul", { className: "space-y-3", children: features.map((feature, index) => (_jsxs("li", { className: "flex items-start text-sm", children: [_jsx(Check, { className: "h-5 w-5 text-green-500 mr-2 flex-shrink-0" }), _jsx("span", { className: "text-gray-600", children: feature })] }, index))) }) }), _jsxs("div", { className: "space-y-3", children: [_jsx(Button, { variant: "primary", className: "w-full", icon: Calendar, onClick: handleBookNow, children: "Book Consultation" }), _jsx(Button, { variant: "outline", className: "w-full", onClick: () => window.location.href = `#contact`, children: "Learn More" })] })] }), _jsx(BookingModal, { isOpen: isBookingModalOpen, onClose: () => setIsBookingModalOpen(false), serviceType: name.toLowerCase().replace(/\s+/g, '-') })] }));
=======
    return (<>
      <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600 text-sm min-h-[48px]">{description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-blue-600 font-bold">
            <DollarSign className="h-5 w-5 mr-1"/>
            <span className="text-xl">{price}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1"/>
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="my-6 border-t border-gray-100 pt-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (<li key={index} className="flex items-start text-sm">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/>
                <span className="text-gray-600">{feature}</span>
              </li>))}
          </ul>
        </div>

        <div className="space-y-3">
          <Button variant="primary" className="w-full" icon={Calendar} onClick={handleBookNow}>
            Book Consultation
          </Button>
          <Button variant="outline" className="w-full" onClick={() => window.location.href = `#contact`}>
            Learn More
          </Button>
        </div>
      </div>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} serviceType={name.toLowerCase().replace(/\s+/g, '-')}/>
    </>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
