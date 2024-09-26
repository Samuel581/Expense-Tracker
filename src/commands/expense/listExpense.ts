import { Expense } from "../../interfaces/expense.interface";
import { readDataBase } from "../../utils/fileOperations";

function listExpenses(category: string){
    const allExpenses: Expense[] = readDataBase();
    if(category==='all' || category === 'All'){
        console.log(allExpenses);
        return true;
    }
    else{
        if(!allExpenses.find((expense: Expense) => expense.category===category)){
            console.log(`The category ${category} was not found in your expenses history`);
            return false;
        }
        console.log(allExpenses.filter((expense: Expense) => expense.category === category));
        return true;
    }
}

export default listExpenses