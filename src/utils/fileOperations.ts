import * as fs from 'fs';
import path from 'path';
import { Expense } from '../interfaces/expense.interface';

const PATH_TO_JSON: string = path.join(__dirname, '..', 'expenses.json');

function readDataBase(): Expense[] {
    let expenses: Expense[] = [];
    if(!fs.existsSync(PATH_TO_JSON)){
        fs.writeFileSync(PATH_TO_JSON, '[]', 'utf8');
    }
    let data = fs.readFileSync(PATH_TO_JSON, 'utf-8');
    expenses = JSON.parse(data).map((expense: Expense) => ({
        ...expense,
        date: new Date(expense.date)
    })) as Expense[]
    return expenses;
}

function writeDataBase(data: Expense[]){
    const updatedExpenses = JSON.stringify(data, null, 2);
    fs.writeFileSync(PATH_TO_JSON, updatedExpenses, 'utf-8');
}

export {readDataBase, writeDataBase}