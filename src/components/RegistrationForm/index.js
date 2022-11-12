import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { Wrapper } from "./RegistrationForm.styles";
/* function ValidateEmail(mail) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}
*/
const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password, email };
    if (validateEmail(email)) {
      user.email = email;
    } else {
      throw new Error("invalid Email address");
    }
    user.username = username;
    user.password = password;
    window.location.replace("/main");
    // check if username is in use at some point
  };
  return (
    <Wrapper>
      <h2>Register a new account</h2>
      <form>
        <label>
          <h3>Enter a Username: </h3>
          <input
            type='text'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <h3>Enter a Password: </h3>
          <input
            type='text'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          <h3>Enter an Email: </h3>
          <input
            type='text'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <Button variant='primary' onClick={handleSubmit}>
          Register!
        </Button>
      </form>
    </Wrapper>
  );
};

export default RegistrationForm;
