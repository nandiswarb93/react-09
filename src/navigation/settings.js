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
