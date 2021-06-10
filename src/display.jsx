import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Display = (props) => {
  const { onView, onAdvice } = props;
  return (
    <div className="loop">
      <div className="card text-center bg-light mb-3 ">
        <div className="card-body">
          <p className="card-text">
            <h5>{onView}</h5>
          </p>
          <button className="btn btn-outline-dark btn-sm" onClick={onAdvice}>
            <span>
              <b>Get Advice!</b>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
