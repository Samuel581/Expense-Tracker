import { writeDataBase, readDataBase } from "../../utils/fileOperations";
import { Expense } from "../../interfaces/expense.interface";
import { v4 as uuidv4 } from 'uuid';
function addExpense(description: string, amount: number, category: string){
    const newExpense: Expense = {
        id: uuidv4(),
        description: description,
        ammount: amount,
        date: new Date().toISOString(),
        category: category
    }
    console.log(newExpense);
}

export default addExpense;