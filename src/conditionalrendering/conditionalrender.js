
// import "../data/style.css"

// const Conditionalrendering = (prop) => {
//   const { array } = prop;

//   return (
//     <>
//       {array.length === 0 ? (
//         <h2>array length is 0</h2>
//       ) : (
//         <h2> array length is {`${array.length}`}</h2>
//       )}
//     </>
//   );
// };
// export default Conditionalrendering;




// export const ConditionRender = (props) => {
//   const { array } = props;

//   return (
//     <>
//       {array.map((data, index) => (
//         data % 2 === 0 ? (
//           <h3 key={index} className="container1">the array item is even</h3>
//         ) : (
//           <h3 key={index} className="container2">the array item is odd</h3>
//         )
//       ))}
//     </>
//   );
// };





import "../data/style.css";

const Conditionalrendering = (props) => {
  const { array } = props;

  return (
    <>
      {array.length === 0 ? (
        <h2>Array length is 0</h2>
      ) : (
        <h2>Array length is {array.length}</h2>
      )}
    </>
  );
};

export default Conditionalrendering;




export const ConditionRender = (props) => {
  const { array } = props;

  return (
    <>
      {array.map((data, index) => (
        data % 2 === 0 ? (
          <h3 key={index} className="container1">The array item is even</h3>
        ) : (
          <h3 key={index} className="container2">The array item is odd</h3>
        )
      ))}
    </>
  );
};

  