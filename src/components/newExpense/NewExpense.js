import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {

  const [isbutton , setisbutton] = React.useState(true);
    
function handlesaveExpense(expense)
{
    const Expense = {
        ...expense,
        id:Math.random().toString()
    }
    console.log(Expense);
    props.onformSubmit(Expense);
}

 function handleIsButton()
 {
  setisbutton(!isbutton);
 }

  return (
    <div className='new-expense'>
       {isbutton ? <button onClick={handleIsButton}> Add Expense</button> :
        <ExpenseForm handleIsButton={handleIsButton} onsaveExpense = {handlesaveExpense} />
       }
    </div>
  )
}

export default NewExpense