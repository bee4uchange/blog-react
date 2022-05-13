import React from "react";
import { Container, css, Button } from "@nextui-org/react";
import "./Header.styles.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav id="navbar-container">
      <div className="navbar-wrapper">
        <Container
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="navbar-left">
            <Link to={"/"}>
              <span className="logo">Tierra.</span>
            </Link>
          </div>
          <div className="navbar-center">
            <div className="navbar-navigation">
              <NavLink to={'/'}><span>Home</span></NavLink>
              <NavLink to={'/blog'}><span>Blog</span></NavLink>
              <NavLink to={'/about'}><span>About</span></NavLink>
            </div>
          </div>
          <div className="navbar-right">
            <Button bordered color="gradient" auto rounded id="button-signup">
              Sign up
            </Button>
            <Button color="gradient" auto rounded>
              Sign in
            </Button>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Header;
