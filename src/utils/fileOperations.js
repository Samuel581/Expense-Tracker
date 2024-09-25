"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDataBase = readDataBase;
exports.writeDataBase = writeDataBase;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const PATH_TO_JSON = path_1.default.join(__dirname, '..', 'expenses.json');
function readDataBase() {
    let expenses = [];
    if (!fs.existsSync(PATH_TO_JSON)) {
        fs.writeFileSync(PATH_TO_JSON, '[]', 'utf8');
    }
    let data = fs.readFileSync(PATH_TO_JSON, 'utf-8');
    expenses = JSON.parse(data);
    return expenses;
}
function writeDataBase(data) {
    const updatedExpenses = JSON.stringify(data, null, 2);
    fs.writeFileSync(PATH_TO_JSON, updatedExpenses, 'utf-8');
}
