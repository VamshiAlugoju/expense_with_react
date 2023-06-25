import React from 'react'
import "./Expensefilter.css"
function Expensefilter(props) {

    function handelChange(e)
    {
        let filteredData ;
       if(e.target.value === "All")
       {
        filteredData = props.ExpenseData
       }
       else{
           filteredData = props.ExpenseData.filter(expense=>{
           // eslint-disable-next-line
           return expense.date.getFullYear() == e.target.value
          })
       }
      props.onChangeyear(filteredData);
    }

  return (
    <div className='Filter_main_div'>
      <div className='Filter_title'>
            <h3>Filter BY Year</h3>
      </div>
      <div className='Filter_options'>
        <select onChange={handelChange} name="" id="" className='filter_select'>
            <option selected value="All">All</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}

export default Expensefilter