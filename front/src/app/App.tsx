import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, NormalizedCacheObject, ApolloProvider, HttpLink } from '@apollo/client'


import Home from "./components/Home";
import TodoMongo from "./components/mongo/TodoMongo";
import TodoPostgres from "./components/postgres/TodoPostgres";
import NewMongoTodo from "./components/mongo/NewMongoTodo";
import NewPostgresTodo from "./components/postgres/NewPostgresTodo";
import TodoMongoDetail from "./components/mongo/TodoMongoDetail";

import "./sass/bundle.scss";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({  uri: 'http://localhost:4000/graphql/' })
 
});

const App = () => {
  return (
    <ApolloProvider client={client} >
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="navHeader">
              Dev Learning Todos
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/mongo">Todo List (Mongo)</Link>
              </li>
              <li>
                <Link to="/postgres">Todo List (Sql)</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mongo">
            <TodoMongo />
          </Route>
          <Route path="/postgres">
            <TodoPostgres />
          </Route>
          <Route path="/newMongoTodo">
            <NewMongoTodo />
          </Route>
          <Route path="/newMongoTodo">
            <NewMongoTodo />
          </Route>
          <Route path="/todoMongoDetail/:id">
            <TodoMongoDetail />
          </Route>
        </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
