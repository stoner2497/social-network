import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import Register from './component/auth/Register'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/register" component={Register} />
      </Router>
    </Provider>
  );
}

export default App;
