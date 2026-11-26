# Expense Tracker

A simple expense tracker built with React and Vite. Add your expenses, edit or delete them, filter by category and see where your money goes each month. Everything is saved in your browser, so your data is still there when you come back.

## Live Demo

[View the app](https://expense-tracker-alphatech.vercel.app/)



## Features

- Add an expense with a description, amount, category and date
- Edit an existing expense (Save or Cancel)
- Delete an expense
- Filter expenses by category (Food, Transport, Education, Bills, Other)
- Newest expenses are shown first
- Total spent updates automatically and follows the selected filter
- Monthly summary with a bar for each month
- Expenses are saved with localStorage and survive a page refresh
- Responsive layout that works on phones

## Built With

- React (components, props, `useState`, `useEffect`)
- Vite
- JavaScript
- CSS (flexbox, media queries)

## What I Learned

- Splitting an app into components (`ExpenseForm`, `ExpenseList`, `ExpenseItem`, `FilterBar`, `ExpenseSummary`, `MonthlySummary`)
- Lifting state up so sibling components can share data
- Keeping temporary edit state inside a component and only updating the real data on Save
- Calculating totals with `.reduce()` and filtering with `.filter()`
- Grouping data by month using an object
- Persisting data with `localStorage` and `useEffect`
- Converting form input strings into numbers before doing maths

## Project Structure

```
src/
  components/
    ExpenseForm.jsx
    ExpenseItem.jsx
    ExpenseList.jsx
    ExpenseSummary.jsx
    FilterBar.jsx
    MonthlySummary.jsx
  App.jsx
  index.css
  main.jsx
```

## Run It Locally

```bash
git clone https://github.com/Tumelo-Tutubala/expense-tracker.git
cd expense-tracker
npm install
npm run dev
```

Then open the local address shown in the terminal (usually http://localhost:5173).

## Future Improvements

- Category breakdown chart
- Automated tests
- Search expenses by description

## Author

Tumelo Tutubala - [GitHub](https://github.com/Tumelo-Tutubala)
