import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import Items from './pages/Items';
import Register from './pages/Register';
import ResetChangePassword from './pages/ResetChangePassword';
import ResetPassword from './pages/ResetPassword';
import { useAppSelector } from './redux/hooks';
import { PAGES } from './utils/constants';
const Login = lazy(() => import('./pages/Login'));

function App(): JSX.Element {
  const authenticated = useAppSelector(
    (state) => state.userReducer.authenticated,
  );
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route
              path={PAGES.home}
              exact
              render={() =>
                authenticated ? <Items /> : <Redirect to={PAGES.login} />
              }
            />
            <Route
              path={PAGES.login}
              exact
              render={() =>
                authenticated ? <Redirect to={PAGES.home} /> : <Login />
              }
            />
            <Route
              path={PAGES.register}
              exact
              render={() =>
                authenticated ? <Redirect to={PAGES.home} /> : <Register />
              }
            />
            <Route path={PAGES.resetPassword} exact component={ResetPassword} />
            <Route
              path={PAGES.resetChangePassword}
              exact
              component={ResetChangePassword}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
