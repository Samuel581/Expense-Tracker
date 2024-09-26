import { Expense } from "../../interfaces/expense.interface";
import { readDataBase } from "../../utils/fileOperations";

function summaryExpenses(month: number){
    const allExpenses: Expense[] = readDataBase()
    let summary: number = 0;
    if(month===13){
        console.log(`Summary for all months: `);
        allExpenses.forEach((expense: Expense) => {
            console.log(`- ${expense.description}: $${expense.amount} (${expense.category} on ${expense.date.toLocaleDateString()})`);
            summary += expense.amount;
        })
        console.log(`* Total amount spent [$${summary}]`);
        return true;
    }
    const filteredExpenses: Expense[] = allExpenses.filter((expense: Expense) => {
        return expense.date.getMonth() + 1 === month;
    })
    
    if(filteredExpenses.length===0){
        console.log(`The month ${month} doesn't have any expenses yet`);
        return false;
    }
    
    console.log(`Summary for month ${month}: `);
    filteredExpenses.forEach((expense: Expense) => {
        console.log(`- ${expense.description}: $${expense.amount} (${expense.category} on ${expense.date.toLocaleDateString()})`);
        summary += expense.amount;
    })

    console.log(`* Total amount spent [$${summary}]`);
    return true;
    
}

export default summaryExpenses;