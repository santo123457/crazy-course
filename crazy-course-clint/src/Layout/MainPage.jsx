import React from "react";
import Header from "../Components/Header/Header";
import { Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";

const MainPage = () => {
  return (
    <div >
      <Header></Header>
      <Row>
        <Col lg="3" className="d-none d-lg-block p-0">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  );
};

export default MainPage;
