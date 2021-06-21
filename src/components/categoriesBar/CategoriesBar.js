import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosbyCategories,
} from "../../redux/actions/videosActions";
import "./_categories.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Telugu Songs",
  "Coding",
  "Cricket",
  "Football",
  "Interview Preparation",
  "Gatsby",
  "Namaste Javascript",
  "Firebase",
];
const CategoriesBar = () => {
  const [activeEl, setActiveEl] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveEl(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosbyCategories(value));
    }
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
