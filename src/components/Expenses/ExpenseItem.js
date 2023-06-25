import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const deleteHandler = ()=>{
      console.log("deleted");
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
         <button onClick={deleteHandler}> Delete </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;