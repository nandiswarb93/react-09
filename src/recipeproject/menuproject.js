import NavbarProject from "./navbarproject";
import { useState, useEffect } from "react";
import axios from "axios";
import "./projectstyle.css";

const MenuProject = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    MenuFetch();
  }, []);
  const MenuFetch = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status == 200) {
        setMenu(response.data.recipes);
      }
    } catch (error) {
      console.log("error  : " + error);
    }
  };
  return (
    <>
      <NavbarProject />
      <div className="grid">
        {menu.map((each) => (
          <div key={each.id}>
            <img src={each.image} height={100} width={150} />
            <h6>{each.name}</h6>
          </div>
        ))}
      </div>
    </>
  );
};
export default MenuProject;
