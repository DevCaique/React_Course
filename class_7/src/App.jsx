import { useState } from "react";
import Axios from "axios";

export const App = () => {
  const [excuse, setExcuse] = useState([]);

  const generateExcuse = (category) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${category}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <>
      <h1>Generate Excuse</h1>
      <div>
        <button onClick={() => generateExcuse("party")}>Party</button>
        <button onClick={() => generateExcuse("family")}>Family</button>
        <button onClick={() => generateExcuse("office")}>Office</button>
      </div>
      {excuse}
    </>
  );
};
