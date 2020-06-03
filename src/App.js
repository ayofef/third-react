import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { HelmetProvider } from "react-helmet-async";

import './App.css';
import Layout from "./containers/Layout/Layout";




const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});


class App extends Component {
  




  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <HelmetProvider>
            <React.Fragment>
              <Layout />
            </React.Fragment>
          </HelmetProvider>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
