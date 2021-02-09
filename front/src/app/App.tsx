import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoMain from "./components/TodoMain";
import NewTodo from './components/NewTodo'

import './sass/bundle.scss'


const App = () => {
  return (
    <Router>
<div>
<nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Kelly Dev Learning Todos</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Main List</Link></li>
        <li><Link to="/newTodo">Add Todo</Link></li>
        
      </ul>
    </div>
  </nav>

       <Switch>
          <Route exact path="/">
            <TodoMain />
          </Route>
          <Route path="/newTodo">
            <NewTodo />
          </Route>
        </Switch>
        </div>
    </Router>
  )
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
