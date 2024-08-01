// import axios from "axios";
// import { useState, useEffect } from "react";

// const FactApi = () => {
//   const [facts, setFacts] = useState([]);

//   useEffect(() => {
//     factData();
//   }, []);
//   const factData = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://dog-api.kinduff.com/api/facts?number=11"
//       );
//       setFacts(data.facts);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const submitHandler = () => {
//     if (facts.length > 0) {
//       console.log("success");
//     } else {
//       alert("no facts found");
//     }
//   };
//   return (
//     <>
//       <h4>random fact about dogs</h4>
//       <button onclick={submitHandler}> click to get som fact</button>

//       <h3>{facts[Math.floor(Math.random() * facts.length)]}</h3>
//     </>
//   );
// };
// export default FactApi;

import axios from "axios";
import { useState, useEffect } from "react";

const FactApi = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    factData();
  }, []);

  const factData = async () => {
    try {
      const { data } = await axios.get(
        "https://dog-api.kinduff.com/api/facts?number=11"
      );
      setFacts(data.facts);
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = () => {
    if (facts.length > 0) {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex]);
      console.log("success");
    } else {
      alert("No facts found");
    }
  };

  return (
    <>
      <div
        style={{ border: "2px solid black", height: "300px", width: "100%" }}
      >
        <h4>Random Fact About Dogs</h4>
        <button onClick={submitHandler}>Click to get a fact</button>
        {randomFact && <h3>{randomFact}</h3>}
      </div>
    </>
  );
};

export default FactApi;
