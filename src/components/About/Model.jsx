import React from "react";
import Career from "../Career/Career";
import "./about.css";
import { RiCloseCircleFill } from "react-icons/ri";
const Model = (props) => {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <Career />
      <button className="close" onClick={cancelHandler}>
        <RiCloseCircleFill />
      </button>
    </div>
  );
};

export default Model;
