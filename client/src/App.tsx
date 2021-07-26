import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import Items from './pages/Items';
import Register from './pages/Register';
import ResetChangePassword from './pages/ResetChangePassword';
import ResetPassword from './pages/ResetPassword';
import { PAGES } from './utils/constants';
const Login = lazy(() => import('./pages/Login'));

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route path={PAGES.home} exact component={Items} />
            <Route path={PAGES.login} exact component={Login} />
            <Route path={PAGES.register} exact component={Register} />
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
