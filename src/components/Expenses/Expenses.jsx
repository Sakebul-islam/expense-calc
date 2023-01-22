import { useState } from 'react';

import ExpenseList from '../ExpenseList/ExpenseList';
import Card from '../UI/Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

import './Expenses.scss';

const Expenses = props => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  console.log(filteredExpenses);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
