import { Expense } from "../../interfaces/expense.interface";
import { readDataBase } from "../../utils/fileOperations";

function listExpenses(category: string){
    const allExpenses: Expense[] = readDataBase();
    switch (category) {
        case 'all':
        case 'All':
            console.log(allExpenses);
            break;
        default:
            try {
                console.log(allExpenses.filter((expense: Expense) => expense.category === category));
            } catch (error) {
                console.error(`The category ${category} has not been found used in your expenses`, error);
            }
            break;
    }
}

export default listExpenses