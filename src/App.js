import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import {About} from './components/About/About'
import {Search} from './components/Search/Search'
import {NoMatch} from './components/NoMatch/NoMatch'
import {NavigationBar} from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path ="/" component={Search} />
            <Route exact path ="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;