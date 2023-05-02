import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { ThemeContext } from "../../Contexts/ThemeProvider/ThemeProvider";
import ReactSwitch from "react-switch";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme} style={{ position: "sticky", top: 0, zIndex: 1 }}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link style={{ color: "#ffffff", textDecoration: "none" }} to="/">
              Crazy Users{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/ features">Features</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blogs">Blogs</Link>
            </Nav>
          </Navbar.Collapse>

          <Link to="/login" className="me-3">Login</Link>
          <Link to="/register"className="me-3">Register</Link>
          <div className="switch d-flex ">
            <small className="pe-3 pt-1">
              <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            </small>
            <ReactSwitch
              onColor="#fff"
              onHandleColor="#000"
              uncheckedIcon
              checkedIcon
              offColor="#333"
              onChange={toggleTheme}
              checked={theme === "dark"}
            ></ReactSwitch>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
