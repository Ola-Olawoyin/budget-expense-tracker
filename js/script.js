let budgetData = JSON.parse(localStorage.getItem("budgetData")) || {
    totalBudget: 0,
    totalExpenses: 0,
    budgetLeft: 0,
    expenses: []
};

function updateUI() {
    document.getElementById('totalBudget').textContent = budgetData.totalBudget.toFixed(2);
    document.getElementById('totalExpenses').textContent = budgetData.totalExpenses.toFixed(2);
    document.getElementById('budgetLeft').textContent = budgetData.budgetLeft.toFixed(2);

    let tableBody = document.querySelector('table-container tbody');
    tableBody.innerHTML = '';
    budgetData.expenses.forEach(function (expense) {
         let row = document.createElement('tr');
         row.innerHTML = `
         <td>${expense.title}</td>
         <td>${expense.amount.toFixed(2)}</td>
        <td><button class="btn btn-sm btn-danger">Remove</button></td>
        `;
        tableBody.appendChild(row)
    });
}