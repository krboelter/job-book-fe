import React from "react";
import "./SideNavTab.css";
export default function SideNavTab(props) {
  return (
    <div
      id="trapezoid"
      onMouseOver={() => {
        props.setVisible(true);
      }}
    >
      Menu
    </div>
  );
}
