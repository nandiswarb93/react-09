// import { useState, useEffect } from "react";
// import findingWhether from "./whetherfunction";

// const WhetherApi = () => {
//   const [season, setSeason] = useState("winter");
//   const [greet, setGreet] = useState("");

//   useEffect(() => {
//     greethandler();
//   }, [season]); // Added season to dependency array

//   const greethandler = () => {
//     const greetstring = findingWhether(season);
//     setGreet(greetstring);
//   };

//   return (
//     <>
//       <h2>Hello, hi!</h2>
//       <h2>which season is this ?</h2>
//       <h3>{greet}</h3>

//       {greet === "mansoon" ? (
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2TI7UjvZjif-8LrLzbr_7lXhojXsNAZG3g&s"
//           height="px"
//           width="200px"
//         />
//       ) : greet === "summer" ? (
//         <img
//           src="https://cdn.pixabay.com/photo/2020/06/26/00/25/summer-5341326_640.jpg"
//           height="300px"
//           width="300px"
//         />
//       ) : (
//         <img
//           src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTc2MDAyMTcyMzMxMTMz/winter-instagram-captions-1-jpg.webp"
//           height="100px"
//           width="200px"
//         />
//       )}
//     </>
//   );
// };

// export default WhetherApi;

import { useState, useEffect } from "react";
import findingWhether from "./whetherfunction";

const WhetherApi = () => {
  const [season, setSeason] = useState("winter");
  const [greet, setGreet] = useState("");

  useEffect(() => {
    greethandler();
  }, [season]);

  const greethandler = () => {
    const greetstring = findingWhether(season);
    setGreet(greetstring);
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <>
      <h2>Hello, hi!</h2>
      <h2>Which season is this?</h2>

      <select value={season} onChange={handleSeasonChange}>
        <option value="winter">Winter</option>
        <option value="summer">Summer</option>
        <option value="monsoon">Monsoon</option>
      </select>

      <h3>{greet}</h3>

      {greet === "monsoon" ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2TI7UjvZjif-8LrLzbr_7lXhojXsNAZG3g&s"
          height="300px"
          width="300px"
          alt="Monsoon"
        />
      ) : greet === "summer" ? (
        <img
          src="https://cdn.pixabay.com/photo/2020/06/26/00/25/summer-5341326_640.jpg"
          height="300px"
          width="300px"
          alt="Summer"
        />
      ) : (
        <img
          src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTc2MDAyMTcyMzMxMTMz/winter-instagram-captions-1-jpg.webp"
          height="300px"
          width="300px"
          alt="Winter"
        />
      )}
    </>
  );
};

export default WhetherApi;
