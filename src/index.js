import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
// import { addExpense } from "./actions/expenses";
// import getVisibleExpenses from "./selectors/expenses";
import "./index.css";
import "./sass/main.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();

// store.dispatch(addExpense({ description: "water bill" }));
// store.dispatch(addExpense({ description: "electric bill" }));
// store.dispatch(addExpense({ description: "holiday", amount: 50000 }));
// store.dispatch(addExpense({ description: "food", amount: 20000 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
