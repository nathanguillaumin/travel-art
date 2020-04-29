import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArtWorks from '../pages/ArtWorks';
import Home from '../pages/Home';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/art-works/:id' component={ArtWorks} />
      </Switch>
    </main>
  );
}

export default Main;
