import React from "react";
import "../scss/Main.scss";
import { data } from "../helper/data";
import Card from "./Card";
const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => {
        return <Card {...item}/>;
      })}
    </div>
  );
};

export default Main;
