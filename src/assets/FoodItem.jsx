import React, { useState } from "react";
import axios from "axios";

const FoodItem = () => {
  const [info, setInfo] = useState([]);

  const apicall = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setInfo(res.data.categories);
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2>API Calling</h2>
      <br />
      <button onClick={apicall}>API Button</button>
      {info.map((item, index) => (
        <p key={item.idCategory}>{item.strCategory}</p>
      ))}
    </>
  );
};

export default FoodItem;
