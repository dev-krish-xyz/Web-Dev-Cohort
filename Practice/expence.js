let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

const expenseCategory = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
}, {});
console.log(expenseCategory);