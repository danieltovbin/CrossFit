import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Cart from "../Cart/Cart";
import "./style.scss";
import { navLinks, socialMedia } from "./headerNav";

const Header = () => {
  return (
    <Navbar
      className="custom-header"
      sticky="top"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          CrossFit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks &&
              navLinks.map((link, index) =>
                link.isExternal ? (
                  <NavLink key={index} to={link.to} className="nav-link">
                    {link.label}
                  </NavLink>
                ) : (
                  <ScrollLink
                    key={index}
                    smooth={true}
                    duration={100}
                    offset={-110}
                    to={link.to}
                    className="nav-link"
                  >
                    {link.label}
                  </ScrollLink>
                )
              )}
          </Nav>
          <Nav className="social-media">
            {socialMedia &&
              socialMedia.map((media, index) => (
                <Nav.Link key={index} href={media.link} target="_blank">
                  <i className={media.iconClassName}></i>
                </Nav.Link>
              ))}
            <Nav.Link>
              <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
