import { useState } from "react";
import React, { useEffect } from "react";

import { Table } from "react-bootstrap";
import axios from "axios";
import { UnorderList } from "../../data/list";

const UseeffectRecipe = () => {
  const [dataset, setDataset] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const fetchingData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");

      if (res.status === 200) {
        setDataset(res.data.recipes);
        setLoad(false);
      }
    } catch (error) {
      setError(true);
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <>
      {load ? (
        <h2> wait for some time . . . . . . . . </h2>
      ) : (
        <>
          <Table striped bordered hover className="mt-4">
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Instructions</th>
            </thead>
            <tbody>
              {dataset.map((each, index) => {
                return (
                  <tr key={each.id}>
                    <td>{each.id}</td>
                    <td>{each.name}</td>
                    <td>
                      <UnorderList array={each.ingredients} />
                    </td>
                    <td>
                      <UnorderList array={each.instructions} />
                    </td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
export default UseeffectRecipe;
