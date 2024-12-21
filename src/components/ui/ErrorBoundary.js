import React, { Component } from 'react';
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
        }
        return this.props.children;
    }
}
