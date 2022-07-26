import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CatologueProvider from './Provider/Catologue';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CatologueProvider>
      <App />
    </CatologueProvider>
  </React.StrictMode>
);


