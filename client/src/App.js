import React, {Fragment,} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Item from './components/Item';
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>

  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/depos/:id" component={Items} />
  <Route exact path="/depos/:depo_id/items/:id" component={Item} />
    <Route component={NoMatch} />
    </Switch>
 
  </Fragment>
);

export default App;
