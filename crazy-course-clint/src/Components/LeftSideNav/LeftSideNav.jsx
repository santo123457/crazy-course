import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeProvider/ThemeProvider";
import "./LeftSideNav.css";
import {
  FaWpforms,
  FaChartBar,
  FaRegNewspaper,
  FaRegCheckSquare,
  FaRegHeart,
} from "react-icons/fa";
const LeftSideNav = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="leftSideNav p-3">
        <small className="">CONTENT</small>

        <h5>
          <FaRegNewspaper></FaRegNewspaper> Courses
        </h5>

        <h5>
          <FaRegCheckSquare></FaRegCheckSquare> checkList
        </h5>
        <h5>
          <FaRegHeart></FaRegHeart> Saved
        </h5>
        <small className="">ANALYTICS</small>
        <h5>
          <FaWpforms></FaWpforms> Dashboard
        </h5>

        <h5>
          <FaChartBar></FaChartBar> Performance
        </h5>

        <small className="">CUSTOMIZATIONS</small>
        <h5>
          <FaWpforms></FaWpforms> Segments
        </h5>

        <h5>
          <FaChartBar></FaChartBar> Settings
        </h5>
      </div>
    </div>
  );
};

export default LeftSideNav;
