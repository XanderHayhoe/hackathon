import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
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
  const dataArray = [];
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      dataArray.append(email);
    } else {
      throw new Error("invalid Email address");
    }
    // check if username is in use at some point
  };
  return (
    <div>
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
          <h3>Enter an Email: </h3>
          <input
            type='text'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button onClick={handleSubmit}> Register!</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
