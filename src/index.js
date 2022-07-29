import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import CatologueProvider from './Provider/Catologue';
import { client } from './Services/apollo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <CatologueProvider >
          <App />
        </CatologueProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);


