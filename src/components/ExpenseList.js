import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };
  return (
    <>
      <input
        type="text"
        className="form-control mb-4 "
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} //In a list from an array with JSX, you should add a key prop to each child and to any of its’ children.
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
