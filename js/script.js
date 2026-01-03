//Load budget data from localStorage or initialise defaults
let budgetData = JSON.parse(localStorage.getItem('budgetData')) || {
    totalBudget: 0,
    totalExpenses: 0,
    budgetLeft: 0,
    expenses: [],
};

//Update UI with current budget data
function updateUI() {
    //Update summary displays
    document.getElementById('totalBudget').textContent =
        budgetData.totalBudget.toFixed(2);
    document.getElementById('totalExpense').textContent =
        budgetData.totalExpenses.toFixed(2);
    document.getElementById('budgetLeft').textContent =
        budgetData.budgetLeft.toFixed(2);

    //Render expense table
    let tableBody = document.querySelector('.table-container tbody');
    tableBody.innerHTML = '';
    budgetData.expenses.forEach(function (expense) {
        let row = document.createElement('tr');
        row.innerHTML = `
         <td>${expense.title}</td>
         <td>${expense.amount.toFixed(2)}</td>
        <td><button class="btn btn-sm btn-danger">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

//Save budget data to localStorage
function updateLocalStorage() {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
}

//Reset all budget data
function resetAll() {
    //Clear all data
    budgetData.totalBudget = 0;
    budgetData.totalExpenses = 0;
    budgetData.budgetLeft = 0;
    budgetData.expenses = [];

    //Save and refresh display
    updateLocalStorage();
    updateUI();
}

//Initialise app when page is loaded
document.addEventListener('DOMContentLoaded', function () {
    updateUI();

    //Handle budget form submission
    document
        .querySelector('.add-budget-container form')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            let budgetInput = document.getElementById('budget');
            let budgetAmount = parseFloat(budgetInput.value.trim());

            //Validate budget input
            if (isNaN(budgetAmount) || budgetAmount <= 0) {
                alert('Please enter a valid budget amount!');
                return;
            }

            budgetData.totalBudget = budgetAmount;
            budgetData.budgetLeft = budgetAmount - budgetData.totalExpenses;
            updateLocalStorage();
            updateUI();
            budgetInput.value = '';
        });

    //Handle expense form submission
    document
        .querySelector('.add-expense-container form')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            let expenseInput = document.getElementById('expense');
            let amountInput = document.getElementById('amount');

            let expenseTitle = expenseInput.value.trim();
            let expenseAmount = parseFloat(amountInput.value.trim());

            //Validate expense input
            if (expenseTitle === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
                alert('Please enter a valid expense!');
                return;
            }

            //Adding new expense
            budgetData.expenses.push({
                title: expenseTitle,
                amount: expenseAmount,
            });

            //Update totals
            budgetData.totalExpenses += expenseAmount;
            budgetData.budgetLeft -= expenseAmount;

            //Clear input fields
            updateLocalStorage();
            updateUI();

            expenseInput.value = '';
            amountInput.value = '';
        });

    //Handle remove expense button clicks
    document
        .querySelector('.table-container')
        .addEventListener('click', function (event) {
            if (event.target && event.target.matches('button.btn-danger')) {
                let rowIndex = event.target.closest('tr').rowIndex - 1;
                let removedExpense = budgetData.expenses.splice(rowIndex, 1)[0];
                budgetData.totalExpenses -= removedExpense.amount;
                budgetData.budgetLeft += removedExpense.amount;
                updateLocalStorage();
                updateUI();
            }
        });
});
