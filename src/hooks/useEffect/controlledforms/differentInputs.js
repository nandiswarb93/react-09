import React, { useState } from "react";

const DifferentInput = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    const selectedOption = event.target.value;

    setCountry(selectedOption);
    console.log(selectedOption);
  };

  return (
    <>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
        placeholder="Password"
      />
      <select name="country" value={country} onChange={handleChange}>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Africa">Africa</option>
        <option value="pakistan">pakistan</option>
        <option value="Dallas">Dallas</option>
        <option value="west indies">west indies</option>
        <option value="australia">australia</option>
        <option value="canada">canada</option>
      </select>
    </>
  );
};

export default DifferentInput;
