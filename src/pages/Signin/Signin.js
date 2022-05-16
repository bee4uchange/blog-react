import { Button, Input } from "@nextui-org/react";
import React from "react";
import './Signin.styles.scss';

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <Input clearable label="Username" placeholder="Enter your name" className="username"/>
        <Input
          clearable
          type="password"
          label="Password"
          placeholder="Enter your password"
          className="password"
        />
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default Signin;
