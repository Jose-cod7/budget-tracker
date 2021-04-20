import React from "react";

export const ViewBudget = (props) => {
  return (
    <div>
      <span>Budget: {props.budget} €</span>
      <button
        className="btn btn-primary"
        style={{ marginLeft: 40 }}
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
