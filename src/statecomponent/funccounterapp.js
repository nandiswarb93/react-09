// const Counterapp = () => {
//   let a = 1;

//   function incerement(a) {
//     a = a + 1;
//   }
//   return (
//     <div>
//       <h1>Functional based counter app</h1>
//       <button onClick={() => increment(1)}>increment</button>
//     </div>
//   );
// };
// export default Counterapp;

import React, { useState } from "react";

const Counterapp = () => {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Functional based counter app</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counterapp;
