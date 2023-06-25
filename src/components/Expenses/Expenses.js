import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import Expensefilter from './Expensefilter';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredData , setData] = React.useState(props.items);
  console.log(props.items);
  function handleYearChange(data)
  {
     setData(data);
  }
  
  if(props.items.length === 0)
    return (
      <Card className="expenses">
         <h2> No Expenses</h2>
      </Card>
    )

  return (
    <Card className="expenses">
       <Expensefilter ExpenseData = {props.items} onChangeyear = {handleYearChange} />
      {filteredData.map(expense=>{
        return  <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      })}

    </Card>
  );
}

export default Expenses;