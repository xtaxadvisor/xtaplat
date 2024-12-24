<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
=======
import React, { Component } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
export class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
<<<<<<< HEAD
            return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsx("div", { className: "max-w-md w-full space-y-8 p-8", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Something went wrong" }), _jsx("p", { className: "mt-2 text-gray-600", children: this.state.error?.message || 'An unexpected error occurred' }), _jsx("button", { onClick: () => window.location.reload(), className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700", children: "Reload page" })] }) }) }));
=======
            return (<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full space-y-8 p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
              <p className="mt-2 text-gray-600">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button onClick={() => window.location.reload()} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Reload page
              </button>
            </div>
          </div>
        </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
        }
        return this.props.children;
    }
}
