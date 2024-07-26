// import React, { useRef, useState } from "react";

// function UncontrolledForm() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const [error, setError] = useState(null);
//   const submitHandler = (event) => {
//     event.preventDefault();
//     const emailEntered = emailRef.current.value;
//     const passwordEntered = passwordRef.current.value;
//     console.log(emailEntered, passwordEntered, "User entered details");
//     if (emailEntered.length < 15 && passwordEntered.length < 15) {
//       setError(null);
//       //allow user to submit

//       sucesssSubmit(emailEntered, passwordEntered);
//     } else {
//       setError("Please entered <15 characters for email and password");
//       // throw the error
//     }
//   };

//   const sucesssSubmit = (username, password) => {
//     fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: "emilys",
//         password: "emilyspass",
//       }),
//     })
//       .then((res) => res.json())
//       .then(console.log);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="mb-3 mt-3">
//         <label htmlFor="email" className="form-label">
//           Email:
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="email"
//           placeholder="Enter email"
//           name="email"
//           ref={emailRef}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="pwd" className="form-label">
//           Password:
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="pwd"
//           placeholder="Enter password"
//           name="pswd"
//           ref={passwordRef}
//         />
//       </div>

//       {error && <span style={{ color: "red" }}>{error}</span>}

//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default UncontrolledForm;

import React, { useState } from "react";

function ControlledForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (email.length < 15 && password.length < 15) {
      setError(null);
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: email, password }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
        // Handle fetch error
      }
    } else {
      setError("Please enter <15 characters for email and password");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <span style={{ color: "red" }}>{error}</span>}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
