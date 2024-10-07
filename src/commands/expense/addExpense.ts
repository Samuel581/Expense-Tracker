import { writeDataBase, readDataBase } from "../../utils/fileOperations";
import { Expense } from "../../interfaces/expense.interface";
import { v4 as uuidv4 } from 'uuid';
function addExpense(description: string, amount: number, category: string){
    const allExpenses: Expense[] = readDataBase();
    const newExpense: Expense = {
        id: uuidv4(),
        description: description,
        amount: amount,
        date: new Date(),
        category: category
    }
    console.log(`Expense ${description} added`);
    allExpenses.push(newExpense);
    writeDataBase(allExpenses);
}

export default addExpense;