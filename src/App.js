import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import PaymentPage from './PaymentPage/PaymentPage';
import { AuthContext } from './shared/context/auth-context';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    console.log("Login Function Called!");
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/">
                <PaymentPage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      </AuthContext.Provider>
    </>
  )
}

export default App
