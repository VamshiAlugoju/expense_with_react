import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
// import Expensefilter from './components/Expenses/Expensefilter';

const Dummy_data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 11, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  let a = 930;
  console.log(a)
  const [expenses,setexpenses] = React.useState(Dummy_data);
   
  function handleFormsubmit(expense)
  {
      setexpenses(prev=>{
        return [expense,...prev];
      })
  }
  return (
    <div>
      <NewExpense onformSubmit = {handleFormsubmit} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
