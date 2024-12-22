<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Menu, X, Shield, Video, MessageSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
export function Header() {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
<<<<<<< HEAD
    return (_jsxs("header", { className: `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`, children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx("div", { className: "flex items-center cursor-pointer", onClick: () => navigate('/'), children: _jsxs("span", { className: "text-2xl sm:text-3xl font-bold", children: [_jsx("span", { className: "text-blue-600", children: "X" }), _jsx("span", { className: isScrolled ? 'text-gray-900' : 'text-gray-800', children: "Ta" }), _jsx("span", { className: "text-blue-600", children: "X" }), _jsx("span", { className: isScrolled ? 'text-gray-900' : 'text-gray-800', children: "Advisor" }), _jsx("span", { className: "text-blue-600", children: "S" })] }) }), _jsxs("nav", { className: "hidden md:flex items-center space-x-4", children: [_jsx(Link, { to: "/services", className: "text-gray-600 hover:text-blue-600 transition-colors", children: "Services" }), _jsx(Link, { to: "/same-day-services", className: "text-gray-600 hover:text-blue-600 transition-colors", children: "Same Day Services" }), _jsxs(Link, { to: "/browse-videos", className: "text-gray-600 hover:text-blue-600 transition-colors flex items-center", children: [_jsx(Video, { className: "h-4 w-4 mr-1" }), "Video Classes"] }), isAuthenticated && (_jsxs(Link, { to: "/consultation", className: "text-gray-600 hover:text-blue-600 transition-colors flex items-center", children: [_jsx(MessageSquare, { className: "h-4 w-4 mr-1" }), "Consultations"] })), _jsx("a", { href: "#about", className: "text-gray-600 hover:text-blue-600 transition-colors", children: "About" }), _jsx("a", { href: "#contact", className: "text-gray-600 hover:text-blue-600 transition-colors", children: "Contact" }), isAuthenticated && user?.role === 'admin' && (_jsxs(Link, { to: "/admin", className: "flex items-center text-gray-600 hover:text-blue-600 transition-colors", children: [_jsx(Shield, { className: "h-4 w-4 mr-1" }), "Admin"] })), _jsx(Button, { variant: "outline", onClick: () => navigate(isAuthenticated ? getDashboardRoute(user) : '/login'), icon: LogIn, className: "hover-scale", children: isAuthenticated ? 'Dashboard' : 'Login' }), !isAuthenticated && (_jsx(Button, { variant: "primary", onClick: () => navigate('/register'), className: "hover-scale", children: "Get Started" }))] }), _jsx("button", { onClick: toggleMobileMenu, className: "md:hidden text-gray-600 hover:text-gray-900", children: isMobileMenuOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }) }), _jsx("div", { className: `md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`, children: _jsxs("div", { className: "px-4 pt-2 pb-3 space-y-1", children: [_jsx(Link, { to: "/services", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "Services" }), _jsx(Link, { to: "/same-day-services", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "Same Day Services" }), _jsx(Link, { to: "/browse-videos", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "Video Classes" }), isAuthenticated && (_jsx(Link, { to: "/consultation", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "Consultations" })), _jsx("a", { href: "#about", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "About" }), _jsx("a", { href: "#contact", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "Contact" }), isAuthenticated && user?.role === 'admin' && (_jsx(Link, { to: "/admin", className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50", children: "Admin Portal" })), _jsxs("div", { className: "pt-4", children: [_jsx(Button, { variant: "outline", onClick: () => navigate(isAuthenticated ? getDashboardRoute(user) : '/login'), icon: LogIn, className: "w-full mb-2", children: isAuthenticated ? 'Dashboard' : 'Login' }), !isAuthenticated && (_jsx(Button, { variant: "primary", onClick: () => navigate('/register'), className: "w-full", children: "Get Started" }))] })] }) })] }));
=======
    return (<header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl sm:text-3xl font-bold">
              <span className="text-blue-600">X</span>
              <span className={isScrolled ? 'text-gray-900' : 'text-gray-800'}>Ta</span>
              <span className="text-blue-600">X</span>
              <span className={isScrolled ? 'text-gray-900' : 'text-gray-800'}>Advisor</span>
              <span className="text-blue-600">S</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/same-day-services" className="text-gray-600 hover:text-blue-600 transition-colors">Same Day Services</Link>
            <Link to="/browse-videos" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <Video className="h-4 w-4 mr-1"/>
              Video Classes
            </Link>
            {isAuthenticated && (<Link to="/consultation" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                <MessageSquare className="h-4 w-4 mr-1"/>
                Consultations
              </Link>)}
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            
            {isAuthenticated && user?.role === 'admin' && (<Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Shield className="h-4 w-4 mr-1"/>
                Admin
              </Link>)}
            
            <Button variant="outline" onClick={() => navigate(isAuthenticated ? getDashboardRoute(user) : '/login')} icon={LogIn} className="hover-scale">
              {isAuthenticated ? 'Dashboard' : 'Login'}
            </Button>
            
            {!isAuthenticated && (<Button variant="primary" onClick={() => navigate('/register')} className="hover-scale">
                Get Started
              </Button>)}
          </nav>

          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-gray-900">
            {isMobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Services
          </Link>
          <Link to="/same-day-services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Same Day Services
          </Link>
          <Link to="/browse-videos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Video Classes
          </Link>
          {isAuthenticated && (<Link to="/consultation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Consultations
            </Link>)}
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            About
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Contact
          </a>
          {isAuthenticated && user?.role === 'admin' && (<Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Admin Portal
            </Link>)}
          <div className="pt-4">
            <Button variant="outline" onClick={() => navigate(isAuthenticated ? getDashboardRoute(user) : '/login')} icon={LogIn} className="w-full mb-2">
              {isAuthenticated ? 'Dashboard' : 'Login'}
            </Button>
            {!isAuthenticated && (<Button variant="primary" onClick={() => navigate('/register')} className="w-full">
                Get Started
              </Button>)}
          </div>
        </div>
      </div>
    </header>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
function getDashboardRoute(user) {
    if (!user)
        return '/dashboard';
    switch (user.role) {
        case 'admin':
            return '/admin';
        case 'professional':
            return '/professional';
        case 'investor':
            return '/investor';
        default:
            return '/dashboard';
    }
}
