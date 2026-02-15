//Custom alert function that auto-dismisses after 5 seconds
function showCustomAlert(message, type = 'success') {
    const alertBox = document.getElementById('customAlert');
    alertBox.textContent = message;
    alertBox.className = 'custom-alert show';
    
    if (type === 'error') {
        alertBox.classList.add('error');
    } else if (type === 'warning') {
        alertBox.classList.add('warning');
    }
    
    //Auto-dismiss after 5 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 5000);
}

//Load budget data from localStorage or initialise defaults
let budgetData = JSON.parse(localStorage.getItem('budgetData')) || {
    totalBudget: 0,
    totalExpenses: 0,
    budgetLeft: 0,
    expenses: [],
    currency: '£'
};

//Update UI with current budget data
function updateUI() {
    //Update currency symbols
    document.getElementById('currencySymbol1').textContent = budgetData.currency;
    document.getElementById('currencySymbol2').textContent = budgetData.currency;
    document.getElementById('currencySymbol3').textContent = budgetData.currency;
    document.getElementById('currencySymbol4').textContent = budgetData.currency;
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
/* exported resetAll */
function resetAll() {
    if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
        //Clear all data
        budgetData.totalBudget = 0;
        budgetData.totalExpenses = 0;
        budgetData.budgetLeft = 0;
        budgetData.expenses = [];

        //Save and refresh display
        updateLocalStorage();
        updateUI();
        showCustomAlert('All data has been reset successfully!', 'warning');
    }
}

//Initialise app when page is loaded
document.addEventListener('DOMContentLoaded', function () {
    //Set initial currency radio button
    document.querySelectorAll('input[name="currency"]').forEach(radio => {
        if (radio.value === budgetData.currency) {
            radio.checked =true;
        }
    });

    //Currency change event listener
    document.querySelectorAll('input[name="currency"]').forEach(radio => {
        radio.addEventListener('change', function () {
          budgetData.currency = this.value;
          updateLocalStorage();
          updateUI();  
        })
    })
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
                showCustomAlert('Please enter a valid budget amount!', 'error');
                return;
            }

            budgetData.totalBudget = budgetAmount;
            budgetData.budgetLeft = budgetAmount - budgetData.totalExpenses;
            updateLocalStorage();
            updateUI();
            budgetInput.value = '';
            showCustomAlert('Budget added successfully!');
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
                showCustomAlert('Please enter a valid expense!', 'error');
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
            showCustomAlert('Expense added successfully!');
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
