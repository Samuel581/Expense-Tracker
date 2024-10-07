import fs from "fs";
import { Expense } from "../../interfaces/expense.interface";
import { readDataBase } from "../../utils/fileOperations";
import { formatDate } from "../../utils/formatDate";
import path from "path";

const PATH_TO_CSV = path.join(__dirname, "../../data/expenses.csv");

export function exportToCSV(): void{
    try {
        const allExpenses: Expense[] = readDataBase();
        const csvHeader = 'id,description,amount,date,category\n';
        const csvContent = allExpenses.map((expense: Expense) => `${expense.id},${expense.description},${expense.amount},${formatDate(expense.date)},${expense.category}\n`).join('\n');
        const csv = csvHeader + csvContent;

        const fileExists = fs.existsSync(PATH_TO_CSV);
        if(fileExists){
            fs.appendFileSync(PATH_TO_CSV, csvContent, 'utf-8');
        }
        else{
            fs.writeFileSync(PATH_TO_CSV, csv, 'utf-8');
        }

        fs.writeFileSync(PATH_TO_CSV, csv);
        console.log(`Expenses exported to ${PATH_TO_CSV}`);
    } catch (error) {
        console.log('An error occurred while exporting the expenses to CSV', error);
    }
}

