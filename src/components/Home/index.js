import React from "react";

import { Wrapper, HomeButton } from "./Home.styles";
import Button from "react-bootstrap/Button";
import RegisterHeader from "../../pages/Register";
import Main from "../../pages/Main";
import LoginHeader from "../../pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button variant='primary' onClick={() => navigate("/register")}>
        Register
      </Button>
      <Button variant='Secondary' onClick={() => navigate("/login")}>
        Login
      </Button>

      <Button variant='Guest' onClick={() => navigate("/main")}>
        Guest
      </Button>
    </Wrapper>
  );
};

export default Home;
