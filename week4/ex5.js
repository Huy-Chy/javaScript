let expenses=[120, 75, 300, 50];
expenses.forEach(expenses => {
    console.log("Expense recorded: $" + expenses);
});
let total=0;
expenses.forEach(expenses => {
    total+=expenses;
});
console.log("Total expenses : $" +total);