import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Outra from './Outra';

function App(){
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/outra" exact component={Outra} />
    </Router>
  )
}

export default App;