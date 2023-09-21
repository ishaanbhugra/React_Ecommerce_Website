import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './contextAPI/ProductContext';
import { CartProvider } from './contextAPI/CartContext';
import { FilterContextProvider } from './contextAPI/FilterContext';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { LoginContextProvider } from './contextAPI/LoginContext';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AppProvider>
    <FilterContextProvider>
    <CartProvider>
      <LoginContextProvider>
    <App />
    </LoginContextProvider>
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
