import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import './App.css';
import Layout from "./containers/Layout/Layout";




const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck6rpd4rhc8o401dhf0ix7uvt/master"
});


class App extends Component {
  




  render() {
    return (
      <ApolloProvider client={client}>
          <BrowserRouter>
          <React.Fragment>
            <Layout />
          </React.Fragment>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
