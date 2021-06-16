import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SiderBar";
import Home from "./screens/home/Home";
import "./_app.scss";

function App() {
  return (
    <>
      <Header />
      <div className='app__container border border-info'>
        <SideBar />
        <Container fluid className='app__main border border-warning'>
          <Home />
        </Container>
      </div>
    </>
  );
}

export default App;
