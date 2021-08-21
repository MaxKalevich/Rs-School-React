import * as React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Fragment, useState } from 'react';
import Dashboard from '../dashboard/dashboard';
import Spinner from '../spinner/spinner';
import Header from '../header/header';
import AboutPage from '../aboutPage/aboutPage';
import NotFoundPage from '../notFoundPage/notFoundPage';
import DetailsPage from '../details/detailsPage';
import ErrorPage from '../errorPage/ErrorPage';

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const location = useLocation();

  return (
    <Fragment>
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <Dashboard setIsLoading={setIsLoading} setLoadingError={setLoadingError} />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route path="/details/:title">
              <DetailsPage />
            </Route>
            <Route path="/404">
              <NotFoundPage />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {isLoading ? <Spinner /> : false}
      {loadingError ? <ErrorPage /> : false}
    </Fragment>
  );
};

export default App;
