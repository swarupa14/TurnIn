import React from 'react';
import { AuthProvider } from './AuthProvider';
import App from '../App';

const Providers = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default Providers;