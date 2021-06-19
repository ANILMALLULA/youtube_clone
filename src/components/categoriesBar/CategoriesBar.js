import React, { useState } from "react";
import "./_categories.scss";

const keywords = [
  "All",
  "React Js",
  "Angulat Js",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
];
const CategoriesBar = () => {
  const [activeEl, setActiveEl] = useState("All");

  const handleClick = (value) => {
    setActiveEl(value);
  };

  return (
    <div className='CategoriesBar'>
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeEl === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
