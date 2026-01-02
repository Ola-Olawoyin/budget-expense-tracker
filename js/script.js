let budgetData = JSON.parse(localStorage.getItem("budgetData")) || {
    totalBudget: 0,
    totalExpenses: 0,
    budgetLeft: 0,
    expenses: []
};
