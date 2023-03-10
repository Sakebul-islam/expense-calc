import { useState } from 'react';

import './ExpenseForm.scss';

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // ----------------------------------------------------------
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    // ----------------------------------------------------------
    // setEnteredTitle({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // ----------------------------------------------------------
    // setEnteredTitle(previousState => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
    // setEnteredTitle(previousState => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // ----------------------------------------------------------
    // setEnteredAmount({
    //   userInput,
    //   enteredTitle: event.target.value,
    // });
    // ----------------------------------------------------------
    // setEnteredAmount(previousState => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  };
  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // ----------------------------------------------------------
    // setEnteredDate({
    //   userInput,
    //   enteredTitle: event.target.value,
    // });
    // ----------------------------------------------------------
    // setEnteredDate(previousState => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  };

  const submitHandler = event => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpanseData(expenseData);

    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder='Writer expense title here . . .'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder='Enter expense amount . . .'
          />
        </div>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='date'
            min='2011-01-01'
            max='2025-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
