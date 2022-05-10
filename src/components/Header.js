import React from "react";
import { Container, css, Button } from "@nextui-org/react";
import "./Header.styles.scss";

const Header = () => {
  return (
    // <nav id='navbar-container'>
    //   <div className='navbar-wrapper'>

    //   </div>
    // </nav>

    <nav id="navbar-container">
      <div className="navbar-wrapper">
        <Container
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="navbar-left">Logo here</div>
          <div className="navbar-center">
            <div className="navbar-navigation">
              <span>Home</span>
              <span>Blog</span>
              <span>About</span>
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
