import React from 'react';
import Main from './components/main/Main';
import Index from './components/index/';
import Topic from './components/topic/';
import Error from './components/error/';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Index} />
    <Route path="404" component={Error} />
    <Route path="list/:id(/:page)" component={Topic} />
    <Route path="*" component={Error} />
  </Route>
);
