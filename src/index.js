import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import './index.css';
import App from './App';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});

console.log(process.env.REACT_APP_AUTH_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </AuthProvider>
  </React.StrictMode>
);
