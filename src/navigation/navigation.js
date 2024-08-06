import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./home";
import AboutScreen from "./about";
import SettingScreen from "./settings";
import MenuScreen from "./menu";
import React, { useState } from "react";
import { createContext } from "react";

export const MyContext = React.createContext();

const NavigationStack = () => {
  const [accname, setAccName] = useState("");

  const changeAccName = (newName) => {
    setAccName(newName);
  };

  return (
    <>
      <MyContext.Provider
        value={{ username: "nandish", darkMode: true, changeAccName }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>

            <Route path="/about" element={<AboutScreen />}></Route>

            <Route path="/settings" element={<SettingScreen />}></Route>

            <Route path="/menu" element={<MenuScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
};
export default NavigationStack;
