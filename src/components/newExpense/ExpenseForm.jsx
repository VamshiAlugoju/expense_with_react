import React , {useState} from 'react'
import "./ExpenseForm.css"

function ExpenseForm() {

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
      console.log("clicked");
  }


  return (
      <form action="" onSubmit={handlesubmit}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={handletitle} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={handleamount} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={handledate} type="Date" />
            </div>
          <div className="new-expense__actions">
            <button type='submit'> Submit </button>
          </div>
        </div>
      </form>
  )
}

export default ExpenseForm