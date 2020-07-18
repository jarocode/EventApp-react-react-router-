import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import  {MyProvider} from './context/firstContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EventDetails from './components/EventDetails';
import Navbar from './components/Navbar';
import {SecondProvider} from './context/secondContext';
import {TableProvider} from './context/TableContext';
import SuccessModal from './components/SuccessModal';
import {CountryProvider} from './context/countryContext';

function App() {
  return (
      <MyProvider>
          <SecondProvider>
            <TableProvider>
              <CountryProvider>
                <Router>
                  <Switch>
                    <Route path='/dashboard' exact component={Dashboard}/>
                    <Route path='/:id' exact component={EventDetails}/>
                    </Switch>
                  </Router>
              </CountryProvider>
            </TableProvider>
          </SecondProvider>
      </MyProvider>
  );
}

export default App;
