import React , {useState} from 'react'
import "./ExpenseForm.css"

function ExpenseForm(props) {

 const [title , settitle] = useState("");
 const [amount , setamount] = useState("");
 const [date , setdate] = useState("");

  function handletitle(e)
  {
       settitle(e.target.value);
  }
  function handleamount(e)
  {
       setamount(e.target.value);
  }
  function handledate(e)
  {
       setdate(e.target.value);
  }

  function handlesubmit(e)
  {
      e.preventDefault();
      const obj = {
        title,
        amount,
        date:new Date(date)
      }
      setamount("");
      setdate("");
      settitle("");
     props.onsaveExpense(obj);
     props.handleIsButton();
  }


  return (
      <form action="" onSubmit={handlesubmit}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={handletitle} value={title} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={handleamount} value={amount} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={handledate} value={date} type="Date" />
            </div>
          <div className="new-expense__actions">
            <button type='submit'> Submit </button>
          </div>
          <div className="new-expense__actions">
            <button onClick={()=>{props.handleIsButton()}}> Cancel </button>
          </div>
        </div>
      </form>
  )
}

export default ExpenseForm