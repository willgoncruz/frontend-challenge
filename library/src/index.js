import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './pages/Search';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './pages/Details';

import { createContext } from "react"
import SearchStore from './stores/search';

const SearchContext = createContext('SearchStore');

ReactDOM.render(
  <React.StrictMode>
    <SearchContext.Provider value={new SearchStore()}>
    <Router>
      <Switch>
        <Route path='/details'>
          <Details />
        </Route>
        <Route path='/'>
          <SearchContext.Consumer>
            {value => <Search store={value} /> }
          </SearchContext.Consumer>
        </Route>
      </Switch>
    </Router>
  </SearchContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
