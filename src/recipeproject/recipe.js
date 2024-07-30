// import NavbarProject from "./navbarproject";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const RecipeProject = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     RecipeData();
//   }, []);

//   const RecipeData = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/recipes");
//       if (response.status === 200) {
//         setProduct(response.data.recipes);
//       }
//     } catch (error) {
//       console.log("error fetching the recipe ", error);
//     }
//   };

//   return (
//     <>
//       <NavbarProject />
//       {product.map((each) => (
//         <div key={each.id}>{each.name}</div>
//       ))}
//     </>
//   );
// };
// export default RecipeProject;

import NavbarProject from "./navbarproject";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeProject = () => {
  const [product, setProduct] = useState([]);

  const RecipeData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setProduct(response.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching the recipes", error);
    }
  };

  useEffect(() => {
    RecipeData();
  }, []);

  return (
    <>
      <NavbarProject />
      <div className="grid">
        {product.map((each) => (
          <div key={each.id}>
            <h6>{each.name}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeProject;
