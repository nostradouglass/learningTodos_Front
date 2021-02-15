import React from "react";
import ReactDOM from "react-dom";
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import firebase from 'firebase/app'
import {firebaseConfig} from './firebaseConfig'
firebase.initializeApp(firebaseConfig);

import Home from "./views/Home";
import TodoMongo from "./views/mongo/TodoMongo";
import TodoPostgres from "./views/postgres/TodoPostgres";
import NewMongoTodo from "./views/mongo/NewMongoTodo";
import NewPostgresTodo from "./views/postgres/NewPostgresTodo";
import TodoMongoDetail from "./views/mongo/TodoMongoDetail";
import NavHeader from "./components/NavHeader";

import "./sass/bundle.scss";

const link = "https://kellydouglass-com-v2.herokuapp.com/graphql" || "http://localhost:4000/graphql/"

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: link }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mongo">
              <NavHeader>
                <TodoMongo />
              </NavHeader>
            </Route>
            <Route path="/postgres">
              <NavHeader>
                <TodoPostgres />
              </NavHeader>
            </Route>
            <Route path="/newMongoTodo">
              <NavHeader>
                <NewMongoTodo />
              </NavHeader>
            </Route>
            <Route path="/newMongoTodo">
              <NavHeader>
                <NewMongoTodo />
              </NavHeader>
            </Route>
            <Route path="/todoMongoDetail/:id">
              <NavHeader>
                <TodoMongoDetail />
              </NavHeader>
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
