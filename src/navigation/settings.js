// import NavBar from "./navbar";
// import { useContext, useState } from "react";

// import { MyContext } from "./navigation";

// const SettingScreen = () => {
//   const { username, darkMode, changeAccName } = useContext(MyContext);

//   const [userEntered, setUserEntered] = useState("");

//   const userHandler = (e) => {
//     e.preventDefault();
//     setUserEntered(e.target.value);
//   };
//   const submitHandler = () => {
//     changeAccName(userEntered);
//   };
//   const themeHandler = () => {};
//   return (
//     <>
//       <NavBar />
//       <h3>Welcome {userEntered}</h3>
//       <h4>want to change user name</h4>
//       <input type="text" value={userEntered} onChange={userHandler}></input>
//       <button onClick={submitHandler}>submit</button>

//       <h1>hiiii this is setting screen</h1>

//       <button onClick={themeHandler}>click to change theme</button>
//     </>
//   );
// };
// export default SettingScreen;

import NavBar from "./navbar";
import { useContext, useState } from "react";

import { MyContext } from "./navigation";

const SettingScreen = () => {
  const { username, darkMode, changeAccName } = useContext(MyContext);

  return (
    <>
      <NavBar />
      <h3>Welcome {username}</h3>

      <h1>hiiii this is setting screen</h1>
    </>
  );
};
export default SettingScreen;
