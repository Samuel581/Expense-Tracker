import { Expense } from "../../interfaces/expense.interface";
import { readDataBase } from "../../utils/fileOperations";
import { formatDate } from "../../utils/formatDate";  // Import the formatDate function

function displayExpensesTable(expenses: Expense[]): void {
  if (expenses.length === 0) {
    console.log("No expenses to display");
    return;
  }

  const keys = ['id', 'description', 'amount', 'date', 'category'];
  const columnWidths = keys.map(key => 
    Math.max(
      key.length,
      ...expenses.map(obj => {
        if (key === 'date') {
          return formatDate(obj[key] as Date).length;
        }
        return String(obj[key as keyof Expense] || '').length;
      })
    )
  );

  const separator = '+' + columnWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';
  const createRow = (obj: Record<string, any>) => 
    '| ' + keys.map((key, i) => {
      let value = obj[key];
      if (key === 'date' && value instanceof Date) {
        value = formatDate(value);
      }
      return String(value || '').padEnd(columnWidths[i]);
    }).join(' | ') + ' |';

  console.log(separator);
  console.log(createRow(Object.fromEntries(keys.map(key => [key, key]))));
  console.log(separator);
  expenses.forEach(obj => console.log(createRow(obj)));
  console.log(separator);
}

function listExpenses(category: string): boolean {
  const allExpenses: Expense[] = readDataBase();
  
  if (category.toLowerCase() === 'all') {
    console.log("All expenses:");
    displayExpensesTable(allExpenses);
    return true;
  } else {
    const filteredExpenses = allExpenses.filter((expense: Expense) => 
      expense.category.toLowerCase() === category.toLowerCase()
    );
    
    if (filteredExpenses.length === 0) {
      console.log(`The category "${category}" was not found in your expenses history`);
      return false;
    } else {
      console.log(`Expenses for category "${category}":`);
      displayExpensesTable(filteredExpenses);
      return true;
    }
  }
}

export default listExpenses;