import moment from "moment";
export default [
  {
    id: 1,
    description: "dinner",
    note: "",
    amount: 2000,
    createdAt: 0,
  },
  {
    id: 2,
    description: "holidays",
    note: "",
    amount: 5000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: 3,
    description: "donate",
    note: "",
    amount: 4000,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
