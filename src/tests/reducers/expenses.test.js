import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should setup the default value", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove the expense with associated id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "123",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense to the list", () => {
  const expense = {
    id: "5",
    description: "holidays",
    note: "last sunday",
    amount: 20000,
    createdAt: moment(),
  };

  const action = {
    type: "ADD_EXPENSE",
    expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit the expense", () => {
  const amount = 15000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if id not found", () => {
  const amount = 200000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
