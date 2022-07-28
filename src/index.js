import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CatologueProvider from './Provider/Catologue';
import { client } from './Services/apollo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CatologueProvider >
        <App />
      </CatologueProvider>
    </ApolloProvider>
  </React.StrictMode>
);


