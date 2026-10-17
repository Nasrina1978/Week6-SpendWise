# SpendWise - Smart Budget Tracker

### What Your SpendWise Project Does
SpendWise is a personal budgeting application that helps users track finances. It collects monthly budget and expenses (rent, food, transport), calculates total spending and remaining balance, and provides a status message.

### The JavaScript Concepts Implemented
Variables (let, const), Data Types, User Input via prompt(), Calculations, Reusable Functions, DOM Manipulation, Event Handling.

### How Variables Are Being Used
- userName (String): stores name
- monthlyBudget (Number): key budget-related data
- rentExpense, foodExpense, transportExpense (Number): expense-related data
- totalExpenses, remainingBalance (Number): calculated results
- currency (const): fixed "KSH" value that should not change - demonstrates const

### How User Input Is Collected
Using prompt() dialogs and parseFloat() to convert string to number for processing. Stored for calculations.

### How Calculations Are Performed
- Total: rent + food + transport
- Balance: budget - expenses
Performed inside calculateTotalExpenses() and calculateBalance() functions.

### How Functions Help Organize the Code
Functions separate logic: calculateTotalExpenses handles addition, calculateBalance handles subtraction (reusable for any values like 40000-12000=28000), getBudgetStatus handles decision logic, displayResults handles output. Makes code reusable and clean.