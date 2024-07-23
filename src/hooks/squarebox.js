import { useState } from "react";

import "../data/style.css";

const Boxes = () => {
  const [box, setBox] = useState([]);

  const handleClick = (targetId) => {
    const newstate = boxhandler(box, targetId);
    setBox(newstate);
  };
  const boxhandler = (box, targetId) => {
    const updatedArray = box.map((val, idx) => {
      if (val.id === targetId) {
        const newColor =
          val.color === "blue" ? (idx % 2 === 0 ? "red" : "yellow") : "blue";

        return { ...val, color: newColor };
      } else {
        return val;
      }
    });
    return updatedArray;
  };

  const addsquareHandler = () => {
    const newSquare = {
      id: box.length,
      color: box.length % 2 === 0 ? "red" : "yellow",
    };

    const newstate = [...box, newSquare];
    setBox(newstate);
  };

  return (
    <>
      <button onClick={addsquareHandler}>click to add boxes</button>

      {box.map((each, idx) => (
        <div
          key={each.id}
          className="square-card"
          style={{ backgroundColor: each.color }}
          onClick={() => handleClick(each.id)}
        >
          {idx + 1}
        </div>
      ))}
    </>
  );
};

export default Boxes;
