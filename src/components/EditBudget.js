import React, { useState } from "react";

export const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <div>
      <input
        required="required"
        type="number"
        className="form-control "
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
