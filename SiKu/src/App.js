import React,{ Component,Fragment}from 'react';
import{ GlobalStyle } from './style/style.js';

import Home from './components/pages/Home/Home';
// import Detail from './components/pages/Home/component/Detail/Detail';
import Login from './components/pages/Login/Login';

import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
class App extends Component{
  render(){
    return(
        <Fragment>
            <Provider store={store}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/Login'} exact component={Login}/>
                </BrowserRouter>
            </Provider>
        </Fragment>
    );
  }
}
export default App;
