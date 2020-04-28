import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
// import "./playground/destructuring";
// import "./playground/redux-101";
// import "./playground/redux-expenses";
import AuthInfo from "./playground/hoc";
import "./index.css";
import "./sass/main.scss";

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(addExpense({ description: "electric bill" }));
store.dispatch(addExpense({ description: "holiday", amount: 50000 }));
store.dispatch(addExpense({ description: "food", amount: 20000 }));
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

// console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

// ReactDOM.render(
//   <AuthInfo info={"private data"} isAuthenticated={true} />,
//   document.getElementById("root")
// );
