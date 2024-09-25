import { readDataBase, writeDataBase } from "../../utils/fileOperations";
import { Expense } from "../../interfaces/expense.interface";

function deleteExpense(id: string){
    const allExpenses: Expense[] = readDataBase();
    const expenseIndex: number = allExpenses.findIndex((expense: Expense) => expense.id === id);
    if(!expenseIndex){
        console.log(`Expense with the ID ${id} not found`);
        return false;
    }
    const updatedExpenses: Expense[] = allExpenses.filter((expense: Expense) => expense.id !== id);
    console.log(`Expense with the ID ${id} deleted sucessfully`);
    writeDataBase(updatedExpenses);
    return true;
}

export default deleteExpense;