import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {
    
function handlesaveExpense(expense)
{
    const Expense = {
        ...expense,
        id:Math.random().toString()
    }
    console.log(Expense);
    props.onformSubmit(Expense);
}

  return (
    <div className='new-expense'>
        <ExpenseForm onsaveExpense = {handlesaveExpense} />
    </div>
  )
}

export default NewExpense