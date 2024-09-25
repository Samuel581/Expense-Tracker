import { Expense } from "./interfaces/expense.interface";
import  addExpense  from "./commands/expense/addExpense";
import { Command } from "commander";
import deleteExpense from "./commands/expense/deleteExpense";

const program = new Command();

program
    .command('add')
    .description('Adds a new expense')
    .requiredOption('-d, --description <description>', 'Description of the expense')
    .requiredOption('-a, --amount <amount>', 'Amount of the expense')
    .option('-c, --category <category>', 'Category of the expense', 'Miscellaneous')
    .action((options) => {
        const {description, amount, category} = options;
        addExpense(description, amount, category);
    });

program
    .command('delete')
    .requiredOption('-i --id <id>', 'ID of the expense')
    .action((options) => {
        const {id} = options;
        deleteExpense(id);
    })

program.parse(process.argv);