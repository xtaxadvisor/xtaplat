<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Mail, Phone, MapPin } from 'lucide-react';
import { Form } from '../ui/Form';
import { Card } from '../ui/Card';
export function Contact() {
    const handleSubmit = (data) => {
        // Handle form submission
        console.log('Form submitted:', data);
    };
    const formFields = [
        {
            name: 'name',
            label: 'Full Name',
            placeholder: 'John Doe',
            required: true,
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'john@example.com',
            required: true,
        },
        {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            placeholder: 'How can we help you?',
            required: true,
        },
    ];
<<<<<<< HEAD
    return (_jsx("section", { id: "contact", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Contact Us" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Get in touch with our team of experts" })] }), _jsxs("div", { className: "mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsx("div", { className: "bg-gray-50 p-8 rounded-lg", children: _jsx(Form, { fields: formFields, onSubmit: handleSubmit, submitText: "Send Message" }) }), _jsxs("div", { className: "space-y-8", children: [_jsx(Card, { icon: Mail, title: "Email Us", value: "contact@xtaxadvisors.com", description: "support@xtaxadvisors.com" }), _jsx(Card, { icon: Phone, title: "Call Us", value: "+1 321-239-0386", description: "Mon-Fri 9am-6pm EST" }), _jsx(Card, { icon: MapPin, title: "Visit Us", value: "7575 Kingspointe Pkwy Suite 20", description: "Orlando, Florida 32819" })] })] })] }) }));
=======
    return (<section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our team of experts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <Form fields={formFields} onSubmit={handleSubmit} submitText="Send Message"/>
          </div>

          <div className="space-y-8">
            <Card icon={Mail} title="Email Us" value="contact@xtaxadvisors.com" description="support@xtaxadvisors.com"/>
            <Card icon={Phone} title="Call Us" value="+1 321-239-0386" description="Mon-Fri 9am-6pm EST"/>
            <Card icon={MapPin} title="Visit Us" value="7575 Kingspointe Pkwy Suite 20" description="Orlando, Florida 32819"/>
          </div>
        </div>
      </div>
    </section>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
