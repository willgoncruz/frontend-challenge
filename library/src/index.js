import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './pages/Search';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './pages/Details';

import SearchStore from './stores/search';
import DetailsStore from './stores/details';

import { SearchContext, DetailsContext } from './context';

ReactDOM.render(
  <React.StrictMode>
    <SearchContext.Provider value={new SearchStore()}>
    <DetailsContext.Provider value={new DetailsStore()}>
    <Router>
      <Switch>
        <Route path='/details/:id' component={Details} />
        <Route path='/' component={Search} />
      </Switch>
    </Router>
  </DetailsContext.Provider>
  </SearchContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
