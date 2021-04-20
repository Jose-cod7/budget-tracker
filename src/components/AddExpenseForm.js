import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    alert("name " + name + " cost: " + cost);
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input
              required="required"
              type="text"
              id="cost"
              className="form-control"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
          </div>

          <div className="row">
            <div className="col-sm">
              <button type="submit" className="btn btn-primary mt-3">
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
