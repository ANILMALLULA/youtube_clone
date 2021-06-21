import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SiderBar";
import Home from "./screens/home/Home";
import "./_app.scss";
import Login from "./screens/login/Login";
import WatchScreen from "./screens/watchScreen/WatchScreen";

import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((val) => !val);
  };

  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className='app__container'>
        <SideBar sidebar={sidebar} handleSidebar={handleSidebar} />
        <Container fluid className='app__main mt-3'>
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, [accessToken, loading, history]);

  return (
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

      <Route exact path={"/watch/:id"}>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
