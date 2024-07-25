import { useEffect } from "react";

import { useRef } from "react";

import { useState } from "react";

import "./style.css";
const RegistrationForm = () => {
  const email = useRef();
  const password = useRef();
  const mobile = useRef();
  const name = useRef();
  const [error, setError] = useState(null);

  const submitHandle = (e) => {
    e.preventDefault();
    const em = email.current.value;
    const p = password.current.value;
    const m = mobile.current.value;
    const n = name.current.value;

    if (
      em.length <= 30 &&
      p.length > 1 &&
      p.length < 10 &&
      m.length == 10 &&
      n.length > 1 &&
      n.length < 50
    ) {
      setError(null);
      alert("all details met upto mark");
      localStorage.setItem("email", em);
      localStorage.setItem("password", p);
      localStorage.setItem("mobile", m);
      localStorage.setItem("name", n);
    } else {
      setError("entered wrong credentials ");
      alert("ensure with correct details");
    }
  };

  return (
    <>
      <h2>Registration form and details will store in local storage</h2>
      <form onSubmit={submitHandle}>
        <label htmlFor="email">Enter email : </label>
        <input type="email" ref={email} id="email"></input>
        <br />

        <label htmlFor="pass">Enter password : </label>
        <input type="password" ref={password} id="pass"></input>
        <br />

        <label htmlFor="tel">Enter mobile number : </label>
        <input type="text" ref={mobile} id="tel"></input>
        <br />

        <label htmlFor="name">Enter Name : </label>
        <input type="text" ref={name} id="name"></input>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default RegistrationForm;
