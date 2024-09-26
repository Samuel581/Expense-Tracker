import { Expense } from "../../interfaces/expense.interface";
import { readDataBase } from "../../utils/fileOperations";

function summaryExpenses(month: number){
    const allExpenses: Expense[] = readDataBase()
    let summary: number = 0;
    if(month===13){
        allExpenses.forEach((expense: Expense) => {
            summary += expense.amount;
        })
        console.log(`The summary for all the expenses is $${summary}`);
        return true;
    }
    
}

export default summaryExpenses;