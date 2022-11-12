import React from "react";
import Button from "react-bootstrap/Button";
import { Wrapper } from "./Login.styles";
const LoginForm = () => {
  return (
    <Wrapper>
      <h2> Please enter your credential</h2>
      <form>
        <label>
          <h3>Enter a Username: </h3>
          <input type='text' />
        </label>
        <br />
        <label>
          <h3>Enter a Password: </h3>
          <input />
        </label>
        <br />
      </form>
      <Button variant='primary'>Login!</Button>
    </Wrapper>
  );
};

export default LoginForm;
