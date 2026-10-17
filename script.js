// SpendWise - JavaScript Foundation - Week 6

// 2. STORE APPLICATION DATA
let userName = "User";
let monthlyBudget = 0;
let rentExpense = 0;
let foodExpense = 0;
let transportExpense = 0;
let totalExpenses = 0;
let remainingBalance = 0;
const currency = "KSH"; // const because it never changes

// 5. CREATE REUSABLE FUNCTIONS

// Function to calculate total expenses
function calculateTotalExpenses(rent, food, transport) {
    return rent + food + transport;
}

// Function to calculate remaining balance - answers your Q4
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to determine budget status
function getBudgetStatus(balance) {
    if (balance > 0) {
        return `Great! You have ${currency} ${balance} remaining.`;
    } else if (balance === 0) {
        return "You used your entire budget.";
    } else {
        return `Warning! Over budget by ${currency} ${Math.abs(balance)}.`;
    }
}

// Function to display results
function displayResults() {
    console.log("===== SpendWise Budget Report =====");
    console.log(`User: ${userName}`);
    console.log(`Monthly Budget: ${currency} ${monthlyBudget}`);
    console.log(`Total Expenses: ${currency} ${totalExpenses}`);
    console.log(`Remaining Balance: ${currency} ${remainingBalance}`);
    console.log(`Status: ${getBudgetStatus(remainingBalance)}`);
    console.log("===================================");

    document.getElementById("display").innerHTML = `
        <p><strong>User:</strong> ${userName}</p>
        <p><strong>Monthly Budget:</strong> ${currency} ${monthlyBudget}</p>
        <p><strong>Total Expenses:</strong> ${currency} ${totalExpenses}</p>
        <p><strong>Remaining Balance:</strong> ${currency} ${remainingBalance}</p>
        <p><strong>Status:</strong> ${getBudgetStatus(remainingBalance)}</p>
    `;
}

// 3. COLLECT USER INPUT + 4. PERFORM CALCULATIONS
function startBudgeting() {
    userName = prompt("What is your name?") || "User";
    monthlyBudget = parseFloat(prompt(`Hi ${userName}, enter monthly budget (${currency}):`)) || 0;
    rentExpense = parseFloat(prompt("Enter rent expense:")) || 0;
    foodExpense = parseFloat(prompt("Enter food expense:")) || 0;
    transportExpense = parseFloat(prompt("Enter transport expense:")) || 0;

    totalExpenses = calculateTotalExpenses(rentExpense, foodExpense, transportExpense);
    remainingBalance = calculateBalance(monthlyBudget, totalExpenses);
    
    displayResults();
}

// 1. SET UP JAVASCRIPT
console.log("SpendWise JavaScript loaded successfully!");
document.getElementById("startBtn").addEventListener("click", startBudgeting);