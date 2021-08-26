import * as React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';
import AboutPage from '../aboutPage/aboutPage';
import NotFoundPage from '../notFoundPage/notFoundPage';
import DetailsPage from '../details/detailsPage';
import Spinner from '../spinner/spinner';

const App: React.FC = (): JSX.Element => {
  const location = useLocation();
  const loading = useSelector((state: any) => state.mainSlice.loading);
  return (
    <Fragment>
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/details/:title">
              <DetailsPage />
            </Route>
            <Route path="/404">
              <NotFoundPage />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {loading ? <Spinner /> : false}
    </Fragment>
  );
};

export default App;
