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
    const filteredExpenses: Expense[] = allExpenses.filter((expense: Expense) => {
        return expense.date.getMonth() + 1 === month;
    })
    
    if(filteredExpenses.length===0){
        console.log(`The month ${month} doesn't have any expenses yet`);
        return false;
    }
    
    filteredExpenses.forEach((expense: Expense) => {
        summary += expense.amount;
    })

    console.log(`The total expenses of the month ${month} were $${summary}`);
    return true;
    
}

export default summaryExpenses;