import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { removeExpense, editExpense } from "../actions/expenses";
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <>
      <ExpenseForm
        onSubmit={(expense) => {
          // console.log("updated", expense);
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push("/");
        }}
        expense={props.expense}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          // console.log(props.match.params.id);
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};
export default connect(mapStateToProps)(EditExpensePage);
