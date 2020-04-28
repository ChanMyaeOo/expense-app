import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// Actions Generator
// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// Edit Expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_TEXT
const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text,
});

// SORT_BY_AMOUNt
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SORT BY DATe
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SET START DATE
const setStartDate = (date) => ({
  type: "SET_START_DATE",
  date,
});
// SET END DATE
const setEndDate = (date) => ({
  type: "SET_END_DATE",
  date,
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date,
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      // console.log(expense.description);
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenesOne = store.dispatch(
  addExpense({ description: "Rent", amount: "5000", createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Holiday", amount: "10000", createdAt: -250 })
);

// store.dispatch(removeExpense({ id: expenesOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: "5000" }));

// store.dispatch(setTextFilter("holi"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-400));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

// Application's state
const demoState = {
  expenses: [
    {
      id: "1asdf",
      description: "Buy House",
      note: "Buy house at mogok",
      amount: "50000",
      createdAt: 0,
    },
  ],
  filters: {
    text: "house",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
