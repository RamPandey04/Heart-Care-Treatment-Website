import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-center text-red-600 mt-20">Something went wrong. Please try again.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;