# Expense Tracker

A simple expense tracker built with React and Vite. Add your expenses, filter them by category and see how much you have spent. Everything is saved in your browser, so your data is still there when you come back.

## Live Demo

[View the app](YOUR-VERCEL-LINK-HERE)

![Expense Tracker screenshot](./screenshot.png)

## Features

- Add an expense with a description, amount and category
- Delete an expense
- Filter expenses by category (Food, Transport, Education, Bills, Other)
- Total spent updates automatically, and follows the selected filter
- Expenses are saved with localStorage and survive a page refresh
- Responsive layout that works on phones

## Built With

- React (components, props, `useState`, `useEffect`)
- Vite
- JavaScript
- CSS (flexbox, media queries)

## What I Learned

- Splitting an app into components (`ExpenseForm`, `ExpenseList`, `ExpenseItem`, `FilterBar`, `ExpenseSummary`)
- Lifting state up so sibling components can share data
- Calculating totals with `.reduce()` and filtering with `.filter()`
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

- Edit an existing expense
- Add a date to each expense
- Monthly summary and charts
- Automated tests

## Author

Tumelo Tutubala - [GitHub](https://github.com/Tumelo-Tutubala)