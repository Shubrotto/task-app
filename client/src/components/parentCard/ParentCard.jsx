import React from "react";
import "./parentCard.css";
import ChildCard from "../childCard/ChildCard";

const ParentCard = ({ title, colors }) => {
  const color = colors?.map((color) => color);
  console.log(color);
  return (
    <div className="parentCard">
      <div className="parentCardTop">
        <div className="topLeft">
          {color ? (
            <div className={color?.color ? "badge" : "badge"}></div>
          ) : (
            <div className="badge:nth-child"></div>
          )}
          <h4>{title}</h4>
        </div>
        <div className="topRight">
          <h4>0</h4>
        </div>
      </div>
      <div className="parentCardBody">
        <ChildCard />
        <ChildCard />
        <ChildCard />
        <ChildCard />
        <ChildCard />
        <ChildCard />
        <ChildCard />
      </div>
    </div>
  );
};

export default ParentCard;
