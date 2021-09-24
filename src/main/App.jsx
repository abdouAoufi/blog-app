import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Article from "../pages/Articles/Articles";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import SettingProfile from "../pages/User/SettingProfile/SettingProfile";
import ErrorPage from "../pages/404/404";
import CompleteProfile from "../pages/User/CompleteProfile/CompleteProfile";
import Layout from "./Layout/Layout";
import PostCreateTemp from "../components/PostCreateTemp/PostCreateTemp";
import Context from "./ContextHolder/ContextHolder";

function App() {
  return (
    <Context>
      <Router>
        <Layout>
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/article/:id">
                <Article />
              </Route>
              <Route path="/create-post">
                <PostCreateTemp />
              </Route>
              <Route path="/add-userinfo">
                <CompleteProfile />
              </Route>
              <Route path="/update-userinfo">
                <SettingProfile />
              </Route>
              <Route path="/404">
                <ErrorPage />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
        </Layout>
      </Router>
    </Context>
  );
}

export default App;
