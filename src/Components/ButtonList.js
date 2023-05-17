import React from "react";
import Button from "./Button";

const preferencesList = [
  "All",
  "Misxes",
  "Jethalal Champaklal",
  "Live",
  "Recent",
  "Cricket",
  "UPSC",
  "AI 💘 Blockchain",
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
