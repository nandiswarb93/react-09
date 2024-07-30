import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeProject from "./homeproject";
import LoginProject from "./loginproject";
import RegistrationProject from "./registrationproject";
import MenuProject from "./menuproject";
import RecipeProject from "./recipe";

const NavigationPoject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeProject />}></Route>
        <Route path="/login" element={<LoginProject />}></Route>
        <Route path="/registration" element={<RegistrationProject />}></Route>

        <Route path="/menu" element={<MenuProject />}></Route>

        <Route path="/recipe" element={<RecipeProject />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default NavigationPoject;
