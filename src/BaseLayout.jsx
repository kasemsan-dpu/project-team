import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Report from "./Report";
import Member from "./Member";
import NoPage from "./NoPage";
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Project Team</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/member">สมาชิก</Nav.Link>
            </Nav>
            <div style={{ color: "white" }}></div>
          </Container>
        </Navbar>
        <p></p>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Report />} />
                <Route path="report" element={<Report />} />
                <Route path="member" element={<Member />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}
