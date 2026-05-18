import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style/style.js';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}
export default App;
