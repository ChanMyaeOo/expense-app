import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "asdf123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "asdf123",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("asdf123", { note: "some test note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "asdf123",
    updates: {
      note: "some test note",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    note: "rent for last month",
    amount: 50000,
    createdAt: 1000,
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
