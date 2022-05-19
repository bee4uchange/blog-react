import { Button, Input } from "@nextui-org/react";
import React from "react";
import "./Signin.styles.scss";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { AUTH } from "../../constants/actionTypes";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    console.log("Google Sign In was unsuccessful. Try again later");

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <Input
          clearable
          label="Username"
          placeholder="Enter your name"
          className="username"
        />
        <Input
          clearable
          type="password"
          label="Password"
          placeholder="Enter your password"
          className="password"
        />
        <Button rounded css={{ marginBottom: "1rem" }}>
          Sign in
        </Button>
        <GoogleLogin
          clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              color="primary"
              flat
              rounded
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              variant="contained"
            >
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
};

export default Signin;
