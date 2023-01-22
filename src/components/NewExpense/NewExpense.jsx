import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './NewExpense.scss';

const NewExpense = props => {
  const saveExpanseDataHandler = enteredExpanseData => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
};

export default NewExpense;
