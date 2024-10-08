# Expense-Tracker

This is a expense tracker via CLI that let's user add, update, delete, view all expenses and view a summary of all expenses by month.
This is the solution to [Expense Tracker](https://roadmap.sh/projects/expense-tracker) challenge from [Roadmap.sh](https://roadmap.sh/).

## Usage

```bash
$ npx ts-node src/index.ts add --description "Lunch" --amount 20 --category "Food"
# Expense added Lunch

$ npx ts-node src/index.ts list
# +--------------------------------------+-------------+--------+------------+-----------+
# | id                                   | description | amount | date       | category  |
# +--------------------------------------+-------------+--------+------------+-----------+
# | d1d2d353-3f17-4192-b642-723b859c3abe | Soda        | 0.6    | 2024-09-26 | Food      |
# | 97edb1c4-c5aa-4430-bc73-5fec2ee76bd8 | Bus         | 1      | 2024-09-26 | Transport |
# | 6d454f0f-595c-42fe-bf36-0cc0dee97ae4 | Candy       | 0.25   | 2024-10-07 | Food      |
# +--------------------------------------+-------------+--------+------------+-----------+

# Also list can be filtered by category with --category <Category>

$ npx ts-node src/index.ts summary
# Summary for all months: 
# - Soda: $0.6 (Food on 9/25/2024)
# - Bus: $1 (Transport on 9/25/2024)
# - Candy: $0.25 (Food on 10/7/2024)
# * Total amount spent [$1.85]

$ npx ts-node src/index.ts --month 9
# Summary for month 9:
# - Soda: $0.6 (Food on 9/25/2024)
# - Bus: $1 (Transport on 9/25/2024)


$ npx ts-node src/index.ts delete --id 1
# Expense with the ID 1 deleted successfully
```

## Extra

Each command has it's own help message that can be accessed by running the command with `--help` flag.

```bash
$ npx ts-node src/index.ts add --help
# Usage: index add [options]

# Adds a new expense

# Options:
 # -d, --description <description>  Description of the expense
 # -a, --amount <amount>            Amount of the expense
 # -c, --category <category>        Category of the expense (default: "Miscellaneous")
 # -h, --help                       display help for command
  ```
