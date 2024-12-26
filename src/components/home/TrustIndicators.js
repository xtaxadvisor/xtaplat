import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award, Users, TrendingUp, Building2, Star, CheckCircle } from 'lucide-react';
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
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-gray-50 to-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Trusted by Thousands of Clients" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Industry-leading expertise and proven track record" })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center p-6 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg", children: [_jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-50 rounded-full", children: _jsx(stat.icon, { className: "h-6 w-6 text-blue-600" }) }), _jsx("div", { className: "text-3xl font-bold text-gray-900", children: stat.value }), _jsx("div", { className: "mt-1 text-sm text-gray-500", children: stat.label })] }, index))) }), _jsxs("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-8 rounded-xl shadow-md", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsx(Star, { className: "h-6 w-6 text-yellow-400" }), _jsx("h3", { className: "ml-2 text-xl font-semibold text-gray-900", children: "Industry Recognition" })] }), _jsx("div", { className: "space-y-4", children: [
                                        'Top 100 Tax Advisory Firms 2023',
                                        'Excellence in Financial Planning Award',
                                        'Best Digital Innovation in Finance 2023',
                                        'Customer Service Excellence Award'
                                    ].map((award, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx(Award, { className: "h-5 w-5 text-blue-600 mr-2" }), _jsx("span", { className: "text-gray-600", children: award })] }, index))) })] }), _jsxs("div", { className: "bg-white p-8 rounded-xl shadow-md", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-green-500" }), _jsx("h3", { className: "ml-2 text-xl font-semibold text-gray-900", children: "Professional Certifications" })] }), _jsx("div", { className: "space-y-4", children: certifications.map((cert, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mr-2" }), _jsx("span", { className: "text-gray-600", children: cert })] }, index))) })] })] }), _jsx("div", { className: "mt-16 text-center", children: _jsx("div", { className: "inline-flex items-center px-6 py-3 bg-blue-50 rounded-full", children: _jsx("span", { className: "text-blue-600 font-medium", children: "Regulated by SEC and FINRA" }) }) })] }) }));
}
