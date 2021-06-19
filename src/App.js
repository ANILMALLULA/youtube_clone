import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SiderBar";
import Home from "./screens/home/Home";
import "./_app.scss";
import Login from "./screens/login/Login";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((val) => !val);
  };

  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className='app__container border border-info'>
        <SideBar sidebar={sidebar} handleSidebar={handleSidebar} />
        <Container fluid className='app__main border border-warning'>
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Layout>
            <Home />
          </Layout>
        </Route>

        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/search"}>
          <Layout>
            <h1>Search results</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
