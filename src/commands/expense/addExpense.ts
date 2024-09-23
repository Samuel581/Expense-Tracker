import { writeDataBase, readDataBase } from "../../utils/fileOperations";
import { Expense } from "../../interfaces/expense.interface";

export function addExpense(description: string, amount: number, category: string | null){
    const newExpense: Expense = {
        id: Math.floor(Math.random() * 1000),

    }
}