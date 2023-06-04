import React from "react";
import Button from "./Button";

const preferencesList = [
  "All",
  "Misxes",
  "RAJ RIYA",
  "Live",
  "Recent",
  "Cricket",
  "UPSC",
  "AI Blockchain",
  "ANKIT PATHAK BABA",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {preferencesList.map((curelem) => {
        return (
          <div key={curelem}>
            <Button name={curelem} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
