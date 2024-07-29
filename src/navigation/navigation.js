import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./home";
import AboutScreen from "./about";
import SettingScreen from "./settings";
import MenuScreen from "./settings";

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>

        <Route path="/about" element={<AboutScreen />}></Route>

        <Route path="/settings" element={<SettingScreen />}></Route>

        <Route path="/menu" element={<MenuScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default NavigationStack;
