import React from "react";
import { Wrapper } from "./Home.styles";
import Button from "react-bootstrap/Button";
const Home = () => {
  return (
    <Wrapper>
      <Button variant='primary'> Register </Button>
      <Button variant='Secondary'> Login </Button>
      <Button variant='Secondary'> Guest </Button>
    </Wrapper>
  );
};

export default Home;
